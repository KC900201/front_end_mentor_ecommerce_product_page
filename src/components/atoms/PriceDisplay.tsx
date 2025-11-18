import { Chip } from "@heroui/react"

interface PriceDisplayProps {
  price: string
  discount: number
  originalPrice: string
}

const PriceDisplay = ({
  price,
  discount,
  originalPrice,
}: PriceDisplayProps) => {
  return (
    <>
      <div className="flex items-center gap-4">
        <span
          data-testid="price-span"
          className="text-3xl font-bold text-foreground"
        >
          ${price}
        </span>
        <Chip
          data-testid="discount"
          className="rounded-md bg-foreground p-1.5 text-center font-bold text-background"
        >
          {discount}%
        </Chip>
      </div>
      <span
        data-testid="ori-price-span"
        className="font-bold text-muted-foreground line-through lg:text-base"
      >
        ${originalPrice}
      </span>
    </>
  )
}

export default PriceDisplay
