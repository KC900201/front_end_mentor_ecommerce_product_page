import { Image } from "@heroui/react"
import { motion } from "framer-motion"

interface ThumbnailImageProps {
  index: number
  imageSource: string
  productName: string
  isImageSelected: boolean
  setSelectedImage: (index: number) => void
}

const ThumbnailImage = ({
  index,
  imageSource,
  productName,
  isImageSelected,
  setSelectedImage,
}: ThumbnailImageProps) => {
  return (
    <motion.button
      className={`relative cursor-pointer overflow-hidden rounded-xl transition-all ${isImageSelected ? "ring-2 ring-primary" : "hover:opacity-75"}`}
      onClick={() => setSelectedImage(index)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <Image
        src={imageSource}
        alt={`${productName} thumbnail ${index + 1}`}
        className="pointer-events-none aspect-square w-full object-cover"
      />
      {isImageSelected && (
        <motion.div
          className="pointer-events-none absolute inset-0 bg-white/75"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.button>
  )
}

export default ThumbnailImage
