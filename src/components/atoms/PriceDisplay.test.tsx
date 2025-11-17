import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import PriceDisplay from "./PriceDisplay"

describe("PriceDisplay", () => {
  const testPrice = {
    price: "125.00",
    discount: 50,
    originalPrice: "250.00",
  }

  const renderTestComponent = () => {
    return render(
      <PriceDisplay
        price={testPrice.price}
        discount={testPrice.discount}
        originalPrice={testPrice.originalPrice}
      />
    )
  }

  it("renders the component successfully ", () => {
    renderTestComponent()

    // Component getting
    const priceComponent = screen.getByTestId("price-span")
    const discountComponent = screen.getByTestId("discount")
    const oriPriceComponent = screen.getByTestId("ori-price-span")

    // Assertion
    expect(priceComponent).toBeInTheDocument()
    expect(oriPriceComponent).toBeInTheDocument()
    expect(discountComponent).toBeInTheDocument()
  })

  it("displays the correct value and css styling", () => {
    renderTestComponent()

    // Component getting
    const priceComponent = screen.getByTestId("price-span")
    const discountComponent = screen.getByTestId("discount")
    const oriPriceComponent = screen.getByTestId("ori-price-span")

    // Assertion - display correct value
    expect(priceComponent).toHaveTextContent("$125.00")
    expect(discountComponent).toHaveTextContent("50%")
    expect(oriPriceComponent).toHaveTextContent("$250.00")

    // Assertion - to have the correct styling
    expect(priceComponent).toHaveClass("text-3xl font-bold text-foreground")
    expect(discountComponent).toHaveClass(
      "rounded-md bg-foreground p-1.5 text-center font-bold text-background"
    )
    expect(oriPriceComponent).toHaveClass(
      "font-bold text-muted-foreground line-through lg:text-base"
    )
  })

  it("displays the correct aria attributes for Chip component", () => {
    renderTestComponent()

    const chip = screen.getByTestId("discount")

    // Assertion
    expect(chip).toHaveRole("generic")
    expect(chip.tagName).toBe("DIV")
  })
})
