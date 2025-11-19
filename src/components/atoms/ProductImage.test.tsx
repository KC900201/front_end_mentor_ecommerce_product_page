import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import ProductImage from "./ProductImage"

describe("ProductImage", () => {
  const testImage = {
    imageKey: 0,
    imageSource: "testProduct.jpg",
    productName: "Test Product",
    className: "h-full w-full object-cover",
  }

  it("renders the image component successfully", () => {
    render(
      <ProductImage
        imageKey={testImage.imageKey}
        imageSource={testImage.imageSource}
        productName={testImage.productName}
      />
    )

    const imageElement = screen.getByRole("img")

    // Assertion
    expect(imageElement).toBeInTheDocument()
    expect(imageElement).toHaveAttribute(
      "alt",
      `${testImage.productName} - view ${testImage.imageKey + 1}`
    )
    expect(imageElement).toHaveAttribute("src", testImage.imageSource)
  })

  it("displays the image component with the additional styling", () => {
    render(
      <ProductImage
        imageKey={testImage.imageKey}
        imageSource={testImage.imageSource}
        productName={testImage.productName}
        className={testImage.className}
      />
    )

    const imageElement = screen.getByRole("img")

    // Assertion
    expect(imageElement).toHaveClass(testImage.className)
  })
})
