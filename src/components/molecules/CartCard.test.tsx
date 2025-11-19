import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { CartProvider, useCart } from "@/contexts/CartContext"
import type { CartItem, Product } from "@/types/product"

import CartCard from "./CartCard"

vi.mock("@/contexts/CartContext", async () => ({
  useCart: vi.fn(),
}))

// Continue (11/18/2025)
describe("CartCard", () => {
  const mockProduct: Product = {
    id: "1",
    company: "Sneaker Company",
    name: "Fall Limited Edition Sneakers",
    description: "Test description",
    price: 125.0,
    originalPrice: 250.0,
    discount: 50,
    images: ["/images.jpg"],
    thumbnails: ["/thumb1.jpg"],
  }

  const mockRemoveFromCart = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
  })

  const renderWthCart = (cart: CartItem[]) => {
    // Use vi.mocked to get type-safe mocked function
    vi.mocked(useCart).mockReturnValue({
      cart,
      removeFromCart: mockRemoveFromCart,
      addToCart: vi.fn(),
      clearCart: vi.fn(),
      getCartTotal: vi.fn(),
      getCartItemCount: vi.fn(),
    })

    return render(<CartCard />)
  }

  describe("Empty Cart", () => {
    it("renders empty cart message when cart is empty", () => {
      renderWthCart([])
      // Retrieve test DOM
      const emptyMessage = screen.getByText("Your cart is empty.")
      // Assertion
      expect(emptyMessage).toBeInTheDocument()
      expect(emptyMessage).toHaveClass("text-muted-foreground")
    })

    it("does not render cart items when cart is empty", () => {
      renderWthCart([])

      // Retrieve test dom
      const cartButton = screen.queryByTestId("cart-button")
      expect(cartButton).not.toBeInTheDocument()
    })

    it("does not render checkout button when cart is empty", () => {
      renderWthCart([])

      // Retrieve test dom
      const checkOutButton = screen.queryByTestId("checkout-button")
      expect(checkOutButton).not.toBeInTheDocument()
    })
  })

  describe("Cart with Items", () => {
    // Continue (11/19/2025)
    it("renders the cart header with title", () => {})

    it("renders single cart item correctly", () => {})

    it("renders correct product image with alt text", () => {})

    it("calculates item total correctly for different quantities", () => {})
  })

  describe("Remove Item Functionality", () => {})

  describe("Card Styling", () => {})
})
