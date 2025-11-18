import { render, screen } from "@testing-library/react"
import { afterEach, describe, expect, it, vi } from "vitest"

import QuantityButton from "./QuantityButton"

afterEach(() => {
  vi.clearAllMocks()
})

// Continue 11/17/2025
describe("QuantityButton", () => {
  const mockClick = vi.fn()

  it("renders the component by default is decrement button", () => {
    render(<QuantityButton onHandleQuantity={mockClick} />)

    const testButton = screen.getByRole("button")
    const testIcon = screen.getByTestId("minus-icon")

    // Assertion - DOM exists
    expect(testButton).toBeInTheDocument()
    // Assertion - svg icon
    expect(testIcon).toBeInTheDocument()
    expect(testIcon).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg")

    testButton.click()

    expect(mockClick).toHaveBeenCalled()
  })

  it("renders the component as increment button", () => {
    render(<QuantityButton isIncrement onHandleQuantity={mockClick} />)

    const testIcon = screen.getByTestId("plus-icon")

    // Assertion
    expect(testIcon).toBeInTheDocument()
  })
})
