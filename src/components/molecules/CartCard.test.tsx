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

  const renderWithCart = (cart: CartItem[]) => {
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
      renderWithCart([])
      // Retrieve test DOM
      const emptyMessage = screen.getByText("Your cart is empty.")
      // Assertion
      expect(emptyMessage).toBeInTheDocument()
      expect(emptyMessage).toHaveClass("text-muted-foreground")
    })

    it("does not render cart items when cart is empty", () => {
      renderWithCart([])

      // Retrieve test dom
      const cartButton = screen.queryByTestId("cart-button")
      expect(cartButton).not.toBeInTheDocument()
    })

    it("does not render checkout button when cart is empty", () => {
      renderWithCart([])

      // Retrieve test dom
      const checkOutButton = screen.queryByTestId("checkout-button")
      expect(checkOutButton).not.toBeInTheDocument()
    })
  })

  describe("Cart with Items", () => {
    it("renders the cart header with title", () => {
      renderWithCart([])

      const header = screen.getByText("Cart")
      expect(header).toBeInTheDocument()
      expect(header).toHaveClass("font-bold text-foreground")
    })

    it("renders single cart item correctly", () => {
      const cartItem: CartItem = { product: mockProduct, quantity: 2 }
      renderWithCart([cartItem])

      // Assertion
      const productName = screen.getByText(mockProduct.name)
      expect(productName).toBeInTheDocument()

      const priceText = screen.getByText(/\$125\.00 x 2/)
      expect(priceText).toBeInTheDocument()

      const totalPrice = screen.getByText("$250.00")
      expect(totalPrice).toBeInTheDocument()
      expect(totalPrice).toHaveClass("font-bold text-foreground")
    })

    it("renders correct product image with alt text", () => {
      const cartItem: CartItem = { product: mockProduct, quantity: 2 }
      renderWithCart([cartItem])

      const image = screen.getByAltText(mockProduct.name)

      // Assertion
      expect(image).toBeInTheDocument()
      expect(image).toHaveAttribute("src", mockProduct.thumbnails[0])
      expect(image).toHaveClass("h-12 w-12 rounded object-cover")
    })

    it("calculates item total correctly for different quantities", () => {
      const testCases = [
        { quantity: 1, expectedTotal: "$125.00" },
        { quantity: 2, expectedTotal: "$250.00" },
        { quantity: 5, expectedTotal: "$625.00" },
      ]

      testCases.forEach(({ quantity, expectedTotal }) => {
        const { unmount } = renderWithCart([{ product: mockProduct, quantity }])

        expect(screen.getByText(expectedTotal)).toBeInTheDocument()
        unmount()
      })
    })
  })

  // Continue 11/21/2025
  describe("Remove Item Functionality", () => {
    it("calls removeFromCart when cart button is clicked", async () => {})

    it("calls removeFromCart with correct product id for multiple items", async () => {})
  })

  describe("Card Styling", () => {
    it("applies correct card styling classes", () => {})

    it("applies correct header styling", () => {
      renderWithCart([])

      const header = screen.getByText("Cart").parentElement
      expect(header).toHaveClass("border-b", "border-border", "p-4")
    })

    it("applies correct body styling", () => {
      const { container } = renderWithCart([])

      const cardBody = container.querySelector('[class*="p-4"]')

      expect(cardBody).toBeInTheDocument()
    })
  })
})
