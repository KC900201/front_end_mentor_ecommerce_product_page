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
        <Plus className="mx-auto h-4 w-4 self-center font-bold text-primary" />
      ) : (
        <Minus className="mx-auto h-4 w-4 font-bold text-primary" />
      )}
    </Button>
  )
}

export default QuantityButton
