import { Button, Modal, ModalContent } from "@heroui/react"
import { X } from "lucide-react"

import { ChevronButton, ProductImage, ThumbnailImage } from "@/components/atoms"

interface ProductModalProps {
  isOpen: boolean
  thumbnails: string[]
  imageKey: number
  imageSource: string
  productName: string
  setSelectedImage: (index: number) => void
  onOpenChange: (open: boolean) => void
  onHandlePrevious: () => void
  onHandleNext: () => void
}

/**
 * @param isOpen, thumbnails, imageKey, imageSource, productName, setSelectedImage, onOpenChange, onHandlePrevious, onHandleNext
 * @returns Product Modal (too many props drilling)
 */

const ProductModal = ({
  isOpen,
  imageKey,
  imageSource,
  productName,
  thumbnails,
  setSelectedImage,
  onOpenChange,
  onHandleNext,
  onHandlePrevious,
}: ProductModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="2xl"
      isDismissable
      hideCloseButton={true}
      placement="center"
      scrollBehavior="outside"
      classNames={{
        wrapper:
          "bg-black/90 backdrop-blur-lg items-center justify-center !flex !fixed !inset-0 !h-full !w-full",
      }}
    >
      <ModalContent className="mx-auto! my-0!">
        <div className="relative m-auto w-full max-w-[550px]">
          <Button
            isIconOnly
            variant="light"
            className="absolute -top-12 right-0 z-50 h-8 w-8 text-white hover:text-primary"
            onPress={() => onOpenChange(false)}
          >
            <X className="h-8 w-8" />
          </Button>
          {/* Image carousel */}
          <div className="relative overflow-visible rounded-2xl">
            <div className="relative z-0 overflow-hidden rounded-2xl">
              <ProductImage
                imageKey={imageKey}
                imageSource={imageSource}
                productName={productName}
                className="h-[550px] w-full object-cover"
              />
            </div>
            <ChevronButton
              onHandleButton={onHandlePrevious}
              className="absolute top-1/2 left-0 z-50 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white hover:bg-white"
            />
            <ChevronButton
              isRight
              onHandleButton={onHandleNext}
              className="absolute top-1/2 right-0 z-50 h-14 w-14 translate-x-1/2 -translate-y-1/2 rounded-full bg-white hover:bg-white"
            />
          </div>
          <div className="mt-8 grid grid-cols-4 gap-8 px-4">
            {thumbnails.map((thumb, index) => (
              <ThumbnailImage
                key={`thumbnail-model-${index}`}
                index={index}
                imageSource={thumb}
                isImageSelected={imageKey === index}
                productName={productName}
                setSelectedImage={setSelectedImage}
              />
            ))}
          </div>
        </div>
      </ModalContent>
    </Modal>
  )
}

export default ProductModal
