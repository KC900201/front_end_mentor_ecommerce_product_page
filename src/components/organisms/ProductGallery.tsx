import {
  DesktopGallery,
  MobileGallery,
  ProductModal,
} from "@/components/molecules"
import { useState } from "react"

interface ProductGalleryProps {
  images: string[]
  thumbnails: string[]
  productName: string
}

/**
 * @param images, thumbnails, productName
 * @returns a ProductGallery component
 */

const ProductGallery = ({
  images,
  thumbnails,
  productName,
}: ProductGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isLightBoxOpen, setLightBoxOpen] = useState(false)

  const handlePrevious = () => {
    setSelectedImage((prev) => (prev <= 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <>
      <MobileGallery
        imageKey={selectedImage}
        imageSource={images[selectedImage]}
        productName={productName}
        onHandleNext={handleNext}
        onHandlePrevious={handlePrevious}
      />
      <DesktopGallery
        imageKey={selectedImage}
        imageSource={images[selectedImage]}
        thumbnails={thumbnails}
        productName={productName}
        setLightBoxOpen={setLightBoxOpen}
        setSelectedImage={setSelectedImage}
      />
      {/* Image modal (upon clicking image from desktop) - Rendered outside container */}
      <ProductModal
        isOpen={isLightBoxOpen}
        imageKey={selectedImage}
        imageSource={images[selectedImage]}
        thumbnails={thumbnails}
        productName={productName}
        onCloseModal={() => setLightBoxOpen(false)}
        setSelectedImage={setSelectedImage}
        onHandleNext={handleNext}
        onHandlePrevious={handlePrevious}
      />
    </>
  )
}

export default ProductGallery
