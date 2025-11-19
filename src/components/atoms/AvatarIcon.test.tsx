import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import AvatarIcon from "./AvatarIcon"

describe("AvatarIcon", () => {
  const testMockAvatar = {
    src: "testAvatar.jpg",
  }

  it("renders the img component with the loaded image", () => {
    render(<AvatarIcon imageSource={testMockAvatar.src} />)

    // Assertion - avatar image exist
    const imageElement = screen.getByRole("img")
    expect(imageElement).toBeInTheDocument()
    expect(imageElement).toHaveAttribute("alt", "User avatar")
  })

  it("renders the button DOM with the correct css class", () => {
    render(<AvatarIcon imageSource={testMockAvatar.src} />)

    // Assertion - Button icon exists (button)
    const iconButton = screen.getByRole("button")
    expect(iconButton).toBeInTheDocument()
    expect(iconButton).toHaveClass(
      "rounded-full border-2 border-transparent p-0 hover:border-primary"
    )
  })
})
