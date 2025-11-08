import { motion } from "framer-motion"

import { ThumbnailImage } from "@/components/atoms"

/**
 * To-do:
 * [x] Complete the button components
 * [x] Complete the image modal (upon clicking)
 *  [ ] Refactor the component to amend props drilling
 *
 * @returns a web layout product gallery, with image modal
 */

interface DesktopGalleryProps {
  imageKey: number
  imageSource: string
  thumbnails: string[]
  productName: string
  setLightBoxOpen: (isOpen: boolean) => void
  setSelectedImage: (index: number) => void
}

const DesktopGallery = ({
  imageKey,
  imageSource,
  thumbnails,
  productName,
  setLightBoxOpen,
  setSelectedImage,
}: DesktopGalleryProps) => {
  return (
    <section className="hidden lg:block">
      <motion.button
        className="group relative mb-8 w-full cursor-pointer overflow-hidden rounded-2xl"
        onClick={() => setLightBoxOpen(true)}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <img
          src={imageSource}
          alt={`${productName} - view ${imageKey + 1}`}
          className="aspect-square w-full object-cover transition-opacity group-hover:opacity-75"
        />
      </motion.button>
      {/* Thumbnail button (carousel) */}
      <div className="grid grid-cols-4 gap-6">
        {thumbnails.map((thumb, index) => (
          <ThumbnailImage
            key={`thumbnail-${index}`}
            index={index}
            imageSource={thumb}
            isImageSelected={imageKey === index}
            productName={productName}
            setSelectedImage={setSelectedImage}
          />
        ))}
      </div>
    </section>
  )
}

export default DesktopGallery
