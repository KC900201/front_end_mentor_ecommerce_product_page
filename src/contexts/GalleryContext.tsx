import { useDisclosure } from "@heroui/react"
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react"

interface GalleryContextType {
  selectedImage: number
  imageSource: string
  setSelectedImage: (index: number) => void
  handlePreviousImage: () => void
  handleNextImage: () => void
  isOpen: boolean
  onOpen: () => void
  onOpenChange: (isOpen: boolean) => void
}

interface GalleryProviderProps {
  children: ReactNode
  images: string[]
}

const GalleryContext = createContext<GalleryContextType | undefined>(undefined)

export const GalleryProvider = ({ children, images }: GalleryProviderProps) => {
  const [selectedImage, setSelectedImage] = useState(0)
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const handlePreviousImage = useCallback(() => {
    setSelectedImage((prev) => (prev <= 0 ? images.length - 1 : prev - 1))
  }, [images.length])

  const handleNextImage = useCallback(() => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }, [images.length])

  const imageSource = images[selectedImage]

  const value = useMemo(
    () => ({
      selectedImage,
      setSelectedImage,
      handlePreviousImage,
      handleNextImage,
      isOpen,
      imageSource,
      onOpen,
      onOpenChange,
    }),
    [
      selectedImage,
      imageSource,
      isOpen,
      onOpen,
      onOpenChange,
      handleNextImage,
      handlePreviousImage,
    ]
  )

  return (
    <GalleryContext.Provider value={value}>{children}</GalleryContext.Provider>
  )
}

export const useGallery = () => {
  const context = useContext(GalleryContext)

  if (context === undefined) {
    throw new Error("useGallery must be used within a GalleryProvider")
  }

  return context
}
