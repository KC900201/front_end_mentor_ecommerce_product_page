import { fireEvent, render, screen } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"

import DesktopGallery from "./DesktopGallery"

// Mock ThumbnailImage component to isolate Desktop Gallery testing

vi.mock("@/components/atoms", () => ({
  ThumbnailImage: ({
    index,
    setSelectedImage,
    isImageSelected,
    imageSource,
  }: any) => (
    <button
      data-testid={`thumbnail-${index}`}
      onClick={() => setSelectedImage(index)}
      data-selected={isImageSelected}
      data-src={imageSource}
      aria-label={`Thumbnail ${index}`}
    />
  ),
}))

describe("DesktopGallery", () => {
  // mock functions for callback
  const mocksetLightBoxOpen = vi.fn()
  const mockSetSelectedImage = vi.fn()

  const mockProps = {
    imageKey: 0,
    imageSource: "/images/image-product-1.jpg",
    thumbnails: [
      "/images/thumbnail-1.jpg",
      "/images/thumbnail-2.jpg",
      "/images/thumbnail-3.jpg",
      "/images/thumbnail-4.jpg",
    ],
    productName: "Fall Limited Edition Sneakers",
    setLightBoxOpen: mocksetLightBoxOpen,
    setSelectedImage: mockSetSelectedImage,
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe("Positive Test Cases", () => {
    it("renders the main image with correct src and alt text", () => {
      render(<DesktopGallery {...mockProps} />)

      // Assertion - alt text is constructed
      const expectedAlt = "Fall Limited Edition Sneakers - view 1"
      const mainImage = screen.getByRole("img", { name: expectedAlt })

      expect(mainImage).toBeInTheDocument()
      expect(mainImage).toHaveAttribute("src", mockProps.imageSource)
    })

    it("calls setLightBoxOpen function when main image is clicked", () => {
      render(<DesktopGallery {...mockProps} />)

      const mainButton = screen.getByRole("button", {
        name: /Fall Limited Edition Sneakers - view 1/i,
      })
      fireEvent.click(mainButton)

      // Assertion - mock function is called
      expect(mocksetLightBoxOpen).toHaveBeenCalledTimes(1)
    })

    it("renders the correct number of thumbnails", () => {
      render(<DesktopGallery {...mockProps} />)

      const thumbnails = screen.getAllByTestId(/thumbnail-/i)
      expect(thumbnails).toHaveLength(mockProps.thumbnails.length)
    })

    it("passes the correct props to the active thumbnail", () => {
      render(<DesktopGallery {...mockProps} />)

      // Assertion - check the first thumbnail
      const activeThumbNail = screen.getByTestId("thumbnail-0")
      expect(activeThumbNail).toHaveAttribute("data-selected", "true")
      expect(activeThumbNail).toHaveAttribute(
        "data-src",
        mockProps.thumbnails[0]
      )
    })
  })

  describe("Edge Cases", () => {
    it("renders correctly when thumbnails array is empty", () => {
      render(<DesktopGallery {...mockProps} thumbnails={[]} />)

      const thumbnails = screen.queryAllByTestId(/thumbnail-/i)
      expect(thumbnails).toHaveLength(0)

      // Main image should still be present
      expect(screen.getByRole("img")).toBeInTheDocument()
    })

    it("updates alt text correctly when imageKey changes", () => {
      render(<DesktopGallery {...mockProps} imageKey={2} />)

      const expectedAlt = "Fall Limited Edition Sneakers - view 3"

      const mainImage = screen.getByRole("img", { name: expectedAlt })

      expect(mainImage).toBeInTheDocument()
      expect(mainImage).toHaveAttribute("src", mockProps.imageSource)
    })
  })
})
