import { Button } from "@heroui/react"
import { Trash2 } from "lucide-react"

interface CartButtonProps {
  onHandleClick: () => void
}

const CartButton = ({ onHandleClick }: CartButtonProps) => {
  return (
    <Button isIconOnly variant="light" onPress={onHandleClick} size="sm">
      <Trash2
        data-testid="trash-icon"
        className="h-4 w-4 text-muted-foreground hover:text-destructive"
      />
    </Button>
  )
}

export default CartButton
