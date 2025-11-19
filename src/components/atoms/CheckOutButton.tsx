import { Button } from "@heroui/react"

const CheckOutButton = () => {
  return (
    <Button
      className="mt-6 w-full rounded-xl bg-primary font-bold text-primary-foreground"
      data-testid="checkout-button"
      size="lg"
    >
      Checkout
    </Button>
  )
}

export default CheckOutButton
