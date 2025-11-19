import { Card, CardBody, CardHeader, Image } from "@heroui/react"

import { CartButton, CheckOutButton } from "@/components/atoms"
import { useCart } from "@/contexts/CartContext"

const CartCard = () => {
  const { cart, removeFromCart } = useCart()

  return (
    <Card
      className="rounded-b-sm border-none bg-white shadow-xs lg:border-border lg:shadow-lg"
      shadow="none"
    >
      <CardHeader className="border-b border-border p-4">
        <h3 className="font-bold text-foreground">Cart</h3>
      </CardHeader>
      <CardBody className="p-4">
        {cart.length <= 0 ? (
          <p className="py-12 text-center text-muted-foreground">
            Your cart is empty.
          </p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={`item-${item.product.id}`}
                  className="flex items-center gap-4"
                >
                  <Image
                    src={item.product.thumbnails[0]}
                    alt={item.product.name}
                    className="h-12 w-12 rounded object-cover"
                  />
                  {/* Item description */}
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm text-muted-foreground">
                      {item.product.name}
                    </p>
                    <p className="text-sm">
                      <span className="text-muted-foreground">
                        ${item.product.price.toFixed(2)} x {item.quantity}
                      </span>
                      <span className="ml-2 font-bold text-foreground">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </p>
                  </div>
                  {/* Remove from cart button */}
                  <CartButton
                    onHandleClick={() => removeFromCart(item.product.id)}
                  />
                </div>
              ))}
            </div>
            <CheckOutButton />
          </>
        )}
      </CardBody>
    </Card>
  )
}

export default CartCard
