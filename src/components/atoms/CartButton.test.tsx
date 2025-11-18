import { render, screen } from "@testing-library/react"
import { afterEach, describe, expect, it, vi } from "vitest"

import CartButton from "./CartButton"

afterEach(() => {
  vi.clearAllMocks()
})

describe("CartButton", () => {
  const mockOnClick = vi.fn()

  it("renders the button component with the icon", () => {
    render(<CartButton onHandleClick={mockOnClick} />)

    const testButton = screen.getByRole("button")
    const buttonIcon = screen.getByTestId("trash-icon")

    // Assertion
    expect(testButton).toBeInTheDocument()
    expect(buttonIcon).toBeInTheDocument()
  })

  it("calls the click function upon clicked", () => {
    render(<CartButton onHandleClick={mockOnClick} />)

    // Assertion - check mock function is called
    const buttonElement = screen.getByRole("button")
    buttonElement.click()

    expect(mockOnClick).toHaveBeenCalled()
  })
})
