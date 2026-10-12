import {
  DesktopGallery,
  MobileGallery,
  ProductModal,
} from "@/components/molecules"

interface ProductGalleryProps {
  thumbnails: string[]
  productName: string
}

/**
 * @params thumbnails, productName
 * @returns a ProductGallery component
 */

const ProductGallery = ({ thumbnails, productName }: ProductGalleryProps) => {
  return (
    <>
      <MobileGallery productName={productName} />
      <DesktopGallery thumbnails={thumbnails} productName={productName} />

      {/* Image modal (upon clicking image from desktop) - Rendered outside container */}
      <ProductModal thumbnails={thumbnails} productName={productName} />
    </>
  )
}

export default ProductGallery
