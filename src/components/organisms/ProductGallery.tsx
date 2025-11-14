import { useDisclosure } from "@heroui/react"
import { useState } from "react"

import {
  DesktopGallery,
  MobileGallery,
  ProductModal,
} from "@/components/molecules"

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
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

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
        setLightBoxOpen={onOpen}
        setSelectedImage={setSelectedImage}
      />

      {/* Image modal (upon clicking image from desktop) - Rendered outside container */}
      <ProductModal
        isOpen={isOpen}
        imageKey={selectedImage}
        imageSource={images[selectedImage]}
        thumbnails={thumbnails}
        productName={productName}
        onOpenChange={onOpenChange}
        setSelectedImage={setSelectedImage}
        onHandleNext={handleNext}
        onHandlePrevious={handlePrevious}
      />
    </>
  )
}

export default ProductGallery
