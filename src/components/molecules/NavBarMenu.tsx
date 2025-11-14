import { NavbarContent, NavbarItem } from "@heroui/react"

import type { Navigation } from "@/types/navigation"

interface NavBarMenuProps {
  navItems: Navigation[]
}

/**
 * @returns a web layout navigation bar
 */
const NavBarMenu = ({ navItems }: NavBarMenuProps) => {
  return (
    <NavbarContent
      justify="start"
      className="ml-12 hidden flex-1 gap-8 lg:flex"
    >
      {navItems.map((item) => (
        <NavbarItem key={item.name}>
          <a
            href={item.href}
            className="pt-8 pb-5 text-muted-foreground transition-all hover:border-b-4 hover:border-primary hover:text-foreground"
          >
            {item.name}
          </a>
        </NavbarItem>
      ))}
    </NavbarContent>
  )
}

export default NavBarMenu
