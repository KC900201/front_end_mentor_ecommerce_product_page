import { Header, ProductDetails, ProductGallery } from "@/components/organisms"
import { CartProvider, GalleryProvider } from "@/contexts"
import { products } from "@/data/products"

const Home = () => {
  const product = products[0]

  return (
    <GalleryProvider images={product.images}>
      <CartProvider>
        <div className="min-h-screen bg-background">
          <Header />
          <main className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-20 lg:py-16">
              <div className="lg:pl-8">
                <ProductGallery
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
    </GalleryProvider>
  )
}

export default Home
