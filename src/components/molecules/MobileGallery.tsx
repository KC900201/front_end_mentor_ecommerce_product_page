import { ChevronButton, ProductImage } from "@/components/atoms"
import { useGallery } from "@/contexts/GalleryContext"

interface MobileGalleryProps {
  productName: string
}

const MobileGallery = ({ productName }: MobileGalleryProps) => {
  const { selectedImage, imageSource, handlePreviousImage, handleNextImage } =
    useGallery()

  return (
    <section className="relative lg:hidden">
      <div className="relative aspect-square">
        <ProductImage
          imageKey={selectedImage}
          imageSource={imageSource}
          productName={productName}
          className="h-full w-full object-cover"
        />
        {/* directional buttons - left, right */}
        <ChevronButton
          isMobile
          onHandleButton={handlePreviousImage}
          className="absolute top-1/2 left-4 h-10 w-10 -translate-y-1/2 rounded-full bg-background"
        />
        <ChevronButton
          isMobile
          isRight
          onHandleButton={handleNextImage}
          className="absolute top-1/2 right-4 h-10 w-10 -translate-y-1/2 rounded-full bg-background"
        />
      </div>
    </section>
  )
}

export default MobileGallery
