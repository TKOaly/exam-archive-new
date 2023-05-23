import Image from 'next/image'

interface FolderIconProps {
  alt: string
  className: string
  role: string
  ariaHidden: boolean
}

const FolderIcon = ({ alt, className, role, ariaHidden }: FolderIconProps) => (
  <Image
    role={role}
    aria-hidden={ariaHidden}
    className={className}
    alt={alt}
    src="/img/icon-folder.svg"
    width={20}
    height={20}
  />
)

export default FolderIcon
