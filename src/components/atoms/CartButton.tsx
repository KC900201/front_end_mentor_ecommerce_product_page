import { Button } from "@heroui/react"
import { Trash2 } from "lucide-react"

interface CartButtonProps {
  removeFromCart: () => void
}

const CartButton = ({ removeFromCart }: CartButtonProps) => {
  return (
    <Button isIconOnly variant="light" onPress={removeFromCart} size="sm">
      <Trash2 className="h-4 w-4 text-muted-foreground hover:text-destructive" />
    </Button>
  )
}

export default CartButton
