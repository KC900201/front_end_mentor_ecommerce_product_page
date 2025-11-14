import { Avatar, Button } from "@heroui/react"

interface AvatarIconProps {
  imageSource: string
}

const AvatarIcon = ({ imageSource }: AvatarIconProps) => {
  return (
    <Button
      isIconOnly
      variant="light"
      className="rounded-full border-2 border-transparent p-0 hover:border-primary"
    >
      <Avatar src={imageSource} className="h-10 w-10" alt="User avatar" />
    </Button>
  )
}

export default AvatarIcon
