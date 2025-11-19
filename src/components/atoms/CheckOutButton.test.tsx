import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import CheckOutButton from "./CheckOutButton"

describe("CheckOutButton", () => {
  it("renders the button component", () => {
    render(<CheckOutButton />)

    const button = screen.getByRole("button")
    const buttonText = screen.getByText("Checkout")

    // Assertion
    expect(button).toBeInTheDocument()
    expect(buttonText).toBeInTheDocument()
  })

  it("renders the correct styling successfully", () => {
    render(<CheckOutButton />)

    const button = screen.getByRole("button")

    // Assertion
    expect(button).toHaveClass(
      "mt-6 w-full rounded-xl bg-primary font-bold text-primary-foreground"
    )
  })
})
