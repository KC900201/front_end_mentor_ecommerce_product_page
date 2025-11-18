import { render, screen } from "@testing-library/react"
import { afterEach, describe, expect, it, vi } from "vitest"

import ThumbnailImage from "./ThumbnailImage"

afterEach(() => {
  // Clear all mock functions
  vi.clearAllMocks()
})

describe("ThumbnailImage", () => {
  const testThumbNail = {
    index: 0,
    imageSource: "testThumbNail.jpg",
    productName: "product thumbnail",
    setSelectedImage: vi.fn(),
  }

  it("renders the component successfully", () => {
    render(
      <ThumbnailImage
        index={testThumbNail.index}
        imageSource={testThumbNail.imageSource}
        productName={testThumbNail.productName}
        isImageSelected={false}
        setSelectedImage={testThumbNail.setSelectedImage}
      />
    )

    // Retrieving test nodes
    const testButton = screen.getByRole("button")
    const testImage = screen.getByRole("img")

    // Assertion
    expect(testButton).toBeInTheDocument()
    expect(testImage).toBeInTheDocument()

    // test DOMs have the expected styling class
    expect(testButton).toHaveClass(
      "relative cursor-pointer overflow-hidden rounded-xl transition-all hover:opacity-75"
    )
    expect(testImage).toHaveClass(
      "pointer-events-none aspect-square w-full object-cover"
    )
  })

  it("renders the extra div for opacity when isImageSelected is true", () => {
    render(
      <ThumbnailImage
        index={testThumbNail.index}
        imageSource={testThumbNail.imageSource}
        productName={testThumbNail.productName}
        isImageSelected={true}
        setSelectedImage={testThumbNail.setSelectedImage}
      />
    )

    const testDiv = screen.getByTestId("thumbnail-div")

    // Assertion
    expect(testDiv).toBeInTheDocument()
    expect(testDiv.tagName).toEqual("DIV")
    expect(testDiv).toHaveClass(
      "pointer-events-none absolute inset-0 bg-white/75"
    )
  })

  it("calls the selected image with the index upon clicking", () => {
    render(
      <ThumbnailImage
        index={testThumbNail.index}
        imageSource={testThumbNail.imageSource}
        productName={testThumbNail.productName}
        isImageSelected={true}
        setSelectedImage={testThumbNail.setSelectedImage}
      />
    )

    const testButton = screen.getByRole("button")

    // Assertion
    testButton.click()
    expect(testThumbNail.setSelectedImage).toHaveBeenCalled()
  })
})
