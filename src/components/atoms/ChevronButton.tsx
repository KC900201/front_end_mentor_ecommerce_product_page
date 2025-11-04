import { Button } from "@heroui/react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ChevronButtonProps {
  isMobile?: boolean
  isRight?: boolean
  className?: string
  onHandleButton: () => void
}

const ChevronButton = ({
  isMobile = false,
  isRight = false,
  className = "",
  onHandleButton,
}: ChevronButtonProps) => {
  return (
    <Button
      isIconOnly
      className={className}
      variant="solid"
      onPress={onHandleButton}
    >
      {!isRight ? (
        <ChevronLeft className={`${isMobile ? "h-5 w-5" : "h-6 w-6"}`} />
      ) : (
        <ChevronRight className={`${isMobile ? "h-5 w-5" : "h-6 w-6"}`} />
      )}
    </Button>
  )
}

export default ChevronButton
