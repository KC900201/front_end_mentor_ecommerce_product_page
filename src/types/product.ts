export type Product = {
  id: string
  company: string
  name: string
  description: string
  price: number
  originalPrice: number
  discount: number
  images: string[]
  thumbnails: string[]
}

export type CartItem = {
  product: Product
  quantity: number
}