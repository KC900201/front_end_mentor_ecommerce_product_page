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
    <NavbarMenu className="fixed inset-x-0! top-10! z-50 w-screen bg-background/70 backdrop-saturate-150">
      <div className="mx-4 mt-4 flex flex-col gap-3">
        {navItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <a className="w-full text-lg font-bold" href={item.href}>
              {item.name}
            </a>
          </NavbarMenuItem>
        ))}
      </div>
    </NavbarMenu>
  )
}

export default MobileNavBarMenu
