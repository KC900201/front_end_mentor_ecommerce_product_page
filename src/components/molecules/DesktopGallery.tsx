import { motion } from "framer-motion"

import { ThumbnailImage } from "@/components/atoms"
import { useGallery } from "@/contexts/GalleryContext"

/**
 *
 * @returns a web layout product gallery, with image modal
 */

interface DesktopGalleryProps {
  thumbnails: string[]
  productName: string
}

const DesktopGallery = ({ thumbnails, productName }: DesktopGalleryProps) => {
  const { selectedImage, imageSource, onOpen, setSelectedImage } = useGallery()

  return (
    <section className="hidden lg:block">
      <motion.button
        className="group relative mb-8 w-full cursor-pointer overflow-hidden rounded-2xl"
        onClick={onOpen}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <img
          src={imageSource}
          alt={`${productName} - view ${selectedImage + 1}`}
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
            isImageSelected={selectedImage === index}
            productName={productName}
            setSelectedImage={setSelectedImage}
          />
        ))}
      </div>
    </section>
  )
}

export default DesktopGallery
