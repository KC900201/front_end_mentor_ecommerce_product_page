import { Button } from "@heroui/react"
import { motion } from "framer-motion"
import { useState } from "react"

import { PriceDisplay, QuantityButton } from "@/components/atoms"
import { useCart } from "@/contexts/CartContext"
import type { Product } from "@/types/product"
import { ShoppingCart } from "lucide-react"

interface ProductDetailsProps {
  product: Product
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [quantity, setQuantity] = useState(0)
  const { addToCart } = useCart()

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1)
  }

  const handleDecrement = () => {
    setQuantity((prev) => (prev <= 0 ? 0 : prev - 1))
  }

  const handleAddCart = () => {
    addToCart(product, quantity)
    setQuantity(0)
  }

  return (
    <article className="px-6 py-6 lg:py-16">
      <h2 className="mb-4 text-xs font-bold tracking-widest text-muted-foreground uppercase lg:mb-6">
        {product.company}
      </h2>

      <h1 className="mb-4 text-3xl leading-tight font-bold text-foreground lg:mb-6 lg:text-4xl xl:text-5xl">
        {product.name}
      </h1>

      <p className="mb-6 leading-relaxed text-muted-foreground lg:mb-8">
        {product.description}
      </p>

      {/* Product Price */}
      <div className="mb-2 flex flex-wrap items-center gap-4 lg:mb-6 lg:flex-col lg:items-start">
        <PriceDisplay
          price={product.price.toFixed(2)}
          discount={product.discount}
          originalPrice={product.originalPrice.toFixed(2)}
        />
      </div>

      {/* Buttons and quantity display */}
      <div className="mt-8 flex flex-col items-center gap-4 lg:flex-row">
        <div className="flex items-center justify-between rounded-lg bg-muted p-2 lg:flex-1 lg:justify-start">
          <QuantityButton onHandleQuantity={handleDecrement} />
          <motion.span
            key={quantity}
            className="px-4 text-center text-lg font-bold text-foreground"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            {quantity}
          </motion.span>
          <QuantityButton isIncrement onHandleQuantity={handleIncrement} />
        </div>
        <Button
          onPress={handleAddCart}
          className="flex w-full gap-3 rounded-sm bg-primary font-bold text-primary-foreground hover:bg-primary/90 lg:flex"
          size="lg"
          startContent={<ShoppingCart className="h-5 w-5" />}
        >
          Add to cart
        </Button>
      </div>
    </article>
  )
}

export default ProductDetails
