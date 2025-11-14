import { ChevronButton, ProductImage } from "@/components/atoms"

interface MobileGalleryProps {
  imageKey: number
  imageSource: string
  productName: string
  onHandlePrevious: () => void
  onHandleNext: () => void
}

const MobileGallery = ({
  imageKey,
  imageSource,
  productName,
  onHandlePrevious,
  onHandleNext,
}: MobileGalleryProps) => {
  return (
    <section className="relative lg:hidden">
      <div className="relative aspect-square">
        <ProductImage
          imageKey={imageKey}
          imageSource={imageSource}
          productName={productName}
          className="h-full w-full object-cover"
        />
        {/* directional buttons - left, right */}
        <ChevronButton
          isMobile
          onHandleButton={onHandlePrevious}
          className="absolute top-1/2 left-4 h-10 w-10 -translate-y-1/2 rounded-full bg-background"
        />
        <ChevronButton
          isMobile
          isRight
          onHandleButton={onHandleNext}
          className="absolute top-1/2 right-4 h-10 w-10 -translate-y-1/2 rounded-full bg-background"
        />
      </div>
    </section>
  )
}

export default MobileGallery
