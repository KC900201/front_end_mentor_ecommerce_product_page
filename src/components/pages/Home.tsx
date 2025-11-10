import { Header, ProductDetails, ProductGallery } from "@/components/organisms"
import { CartProvider } from "@/contexts/CartContext"
import { products } from "@/data/products"

const Home = () => {
  const product = products[0]

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="mx-auto max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-20 lg:py-16">
            <div className="lg:pl-8">
              <ProductGallery
                images={product.images}
                thumbnails={product.thumbnails}
                productName={product.name}
              />
            </div>
            <div className="lg:pr-8">
              <ProductDetails product={product} />
            </div>
          </div>
        </main>
      </div>
    </CartProvider>
  )
}

export default Home
