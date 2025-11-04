import { motion } from "framer-motion"

/**
 * To-do:
 * [ ] Complete the button components
 * [ ] Complete the image modal (upon clicking)
 * [ ] Complete the mini image carousel
 *
 * @returns a web layout product gallery, with image modal
 */

const DesktopGallery = () => {
  return (
    <section className="hidden lg:block">
      <motion.button>
        <img
          src=""
          alt="test"
          className="aspect-square w-full object-cover transition-opacity group-hover:opacity-75"
        />
      </motion.button>
      {/* Image Modal */}

      {/* Thumbnail button (carousel) */}
    </section>
  )
}

export default DesktopGallery
