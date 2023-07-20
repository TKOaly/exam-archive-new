import Image from 'next/image'

import DocumentIconFile from '@media/icon-document.svg'
import PdfIconFile from '@media/icon-pdf.svg'
import PhotoIconFile from '@media/icon-photo.svg'

interface IconProps {
  alt: string
  className: string
  role: string
  ariaHidden: boolean
}

const [DocumentIcon, PdfIcon, PhotoIcon] = [
  DocumentIconFile,
  PdfIconFile,
  PhotoIconFile
].map(src => ({ alt, className, role, ariaHidden }: IconProps) => {
  return (
    <Image
      src={src}
      role={role}
      aria-hidden={ariaHidden}
      className={className}
      alt={alt}
    />
  )
})

export { DocumentIcon, PdfIcon, PhotoIcon }
