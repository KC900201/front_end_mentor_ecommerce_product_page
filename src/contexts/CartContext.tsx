import { createContext, useContext, useState, type ReactNode } from "react"
import { toast } from "sonner"

import type { CartItem, Product } from "@/types/product"

interface CartContextType {
  cart: CartItem[]
  addToCart: (product: Product, quantity: number) => void
  removeFromCart: (productId: string) => void
  clearCart: () => void
  getCartTotal: () => number
  getCartItemCount: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({children}: {children: ReactNode}) => {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (product: Product, quantity: number) => {
    if(quantity <= 0) {
      toast.error("Invalid quantity", {description: "Please select a quantity greater than 0"})
      return
    }

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.product.id === product.id)

      if(existingItem) {
        toast.success("Cart updated", {
          description: `Quantity updated to ${existingItem.quantity + quantity}`,
        })

        return prevCart.map((item) =>
          item.product.id === product.id ?
          {...item, quantity: item.quantity + quantity}
          : item
        )
      }

      toast.success("Added to cart", {description: `${product.name} has been added to your cart`})

      return [...prevCart, {product, quantity}]
    })
  }

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId))
    toast.success("Removed from cart", {
      description: "Item has been removed from your cart"
    })
  }

  const clearCart = () => {
    setCart([])
  }

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0)
  }

  const getCartItemCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        getCartItemCount
      }}>
        {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }

  return context
}