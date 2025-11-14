import { AnimatePresence, motion } from "framer-motion"

interface ProductImageProps {
  imageKey: number
  imageSource: string
  productName: string
  className?: string
}

const ProductImage = ({
  imageKey,
  imageSource,
  productName,
  className = "",
}: ProductImageProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.img
        key={imageKey}
        src={imageSource}
        alt={`${productName} - view ${imageKey + 1}`}
        className={className}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
    </AnimatePresence>
  )
}

export default ProductImage
