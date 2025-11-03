import {
  Badge,
  Button,
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
} from "@heroui/react"
import { Menu, ShoppingCart, X } from "lucide-react"
import { useState } from "react"

import { AvatarIcon } from "@/components/atoms"
import { MobileNavBarMenu, NavBarMenu } from "@/components/molecules"
import { Cart } from "@/components/organisms"
import { useCart } from "@/contexts/CartContext"

import avatarImg from "@/assets/images/image-avatar.png"
import logoSvg from "@/assets/images/logo.svg"
import { navigation } from "@/data/navigations"

/**
 * Issue:
 *  [ ] NavbarMenuToggle doesn't trigger mobile navbar
 *  [ ] Hamburger icon doesn't display
 *
 * @returns a header component with cart button and navigation bar
 */

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { getCartItemCount } = useCart()
  const cartCount = getCartItemCount()

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      className="border-b border-border pl-3 lg:p-2"
      height={"5rem"}
    >
      {/* Mobile navbar toggler */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
          icon={
            isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )
          }
        />
        <NavbarBrand>
          <Image src={logoSvg} alt="Sneakers" className="h-5" />
        </NavbarBrand>
      </NavbarContent>

      {/* Web layout navbar */}
      <NavBarMenu navItems={navigation} />

      {/* Cart */}
      <NavbarContent justify="end">
        <NavbarItem>
          <Cart>
            <Button
              isIconOnly
              variant="light"
              className="relative"
              aria-label="Shopping cart"
            >
              {cartCount > 0 ? (
                <Badge
                  content={cartCount.toString()}
                  color="warning"
                  placement="top-right"
                >
                  <ShoppingCart className="h-6 w-6" />
                </Badge>
              ) : (
                <ShoppingCart className="h-6 w-6" />
              )}
            </Button>
          </Cart>
        </NavbarItem>
        <NavbarItem>
          <AvatarIcon imageSource={avatarImg} />
        </NavbarItem>
      </NavbarContent>

      {/* Mobile navbar menu */}
      <MobileNavBarMenu navItems={navigation} />
    </Navbar>
  )
}

export default Header
