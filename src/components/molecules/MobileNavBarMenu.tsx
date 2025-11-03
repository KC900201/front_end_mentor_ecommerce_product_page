import { NavbarMenu, NavbarMenuItem } from "@heroui/react"

import type { Navigation } from "@/types/navigation"

interface MobileNavBarMenuProps {
  navItems: Navigation[]
}

/**
 * @param navItems
 * @returns a mobile layout navigation bar
 */

const MobileNavBarMenu = ({ navItems }: MobileNavBarMenuProps) => {
  return (
    <NavbarMenu>
      {navItems.map((item, index) => (
        <NavbarMenuItem key={`${item.name}-${index}`}>
          <a className="w-full text-lg font-bold" href={item.href}>
            {item.name}
          </a>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  )
}

export default MobileNavBarMenu
