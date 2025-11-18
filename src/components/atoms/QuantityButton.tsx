import { Button } from "@heroui/react"
import { Minus, Plus } from "lucide-react"

interface QuantityButtonProps {
  isIncrement?: boolean
  onHandleQuantity: () => void
}

const QuantityButton = ({
  isIncrement = false,
  onHandleQuantity,
}: QuantityButtonProps) => {
  return (
    <Button isIconOnly variant="light" onPress={onHandleQuantity}>
      {isIncrement ? (
        <Plus
          data-testid="plus-icon"
          className="mx-auto h-4 w-4 font-bold text-primary"
        />
      ) : (
        <Minus
          data-testid="minus-icon"
          className="mx-auto h-4 w-4 font-bold text-primary"
        />
      )}
    </Button>
  )
}

export default QuantityButton
