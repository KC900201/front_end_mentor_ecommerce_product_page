import { Popover, PopoverContent, PopoverTrigger } from "@heroui/react"
import React from "react"

import { CartCard } from "@/components/molecules"

interface CartProps {
  children: React.ReactNode
}

const Cart = ({ children }: CartProps) => {
  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent className="w-80 p-0 sm:w-96">
        <CartCard />
      </PopoverContent>
    </Popover>
  )
}

export default Cart
