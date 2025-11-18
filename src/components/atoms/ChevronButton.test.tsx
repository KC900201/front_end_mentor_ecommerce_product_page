import { render, screen } from "@testing-library/react"
import { afterEach, describe, expect, it, vi } from "vitest"

import ChevronButton from "./ChevronButton"

afterEach(() => {
  vi.clearAllMocks()
})

describe("ChevronButton", () => {
  const mockClick = vi.fn()

  it("renders the component by default is left", () => {
    render(<ChevronButton onHandleButton={mockClick} />)

    const button = screen.getByRole("button")
    const leftIcon = screen.getByTestId("left-icon")

    // Assertion
    expect(button).toBeInTheDocument()
    expect(leftIcon).toBeInTheDocument()
    expect(leftIcon).toHaveClass("m-auto h-6 w-6")
  })

  it("renders the component if set isRight", () => {
    render(<ChevronButton onHandleButton={mockClick} isRight />)
    const button = screen.getByRole("button")
    const rightIcon = screen.getByTestId("right-icon")

    // Assertion
    expect(button).toBeInTheDocument()
    expect(rightIcon).toBeInTheDocument()
    expect(rightIcon).toHaveClass("m-auto h-6 w-6")
  })

  it("renders the component in mobile mode successfully", () => {
    render(<ChevronButton onHandleButton={mockClick} isMobile />)

    const leftIcon = screen.getByTestId("left-icon")

    // Assertion
    expect(leftIcon).toHaveClass("h-5 w-5")
  })

  it("calls the onHandleButton successfully on button click", () => {
    render(<ChevronButton onHandleButton={mockClick} />)

    const mockButton = screen.getByRole("button")

    // Assertion
    expect(mockButton).toBeInTheDocument()

    // Check mock function is called
    mockButton.click()
    expect(mockClick).toHaveBeenCalledTimes(1)
  })

  it("renders the component if adding additional styling", () => {
    render(<ChevronButton onHandleButton={mockClick} className="m-auto" />)

    const mockButton = screen.getByRole("button")

    // Assertion - extra class is detected
    expect(mockButton).toHaveClass("m-auto")
  })
})
