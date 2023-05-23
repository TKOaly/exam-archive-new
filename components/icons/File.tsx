import Image from 'next/image'

interface IconProps {
  alt: string
  className: string
  role: string
  ariaHidden: boolean
}

const [DocumentIcon, PdfIcon, PhotoIcon] = [
  '/img/icon-document.svg',
  '/img/icon-pdf.svg',
  '/img/icon-photo.svg'
].map(src => ({ alt, className, role, ariaHidden }: IconProps) => {
  return (
    <Image
      src={src}
      role={role}
      aria-hidden={ariaHidden}
      className={className}
      alt={alt}
      width={20}
      height={20}
    />
  )
})

export { DocumentIcon, PdfIcon, PhotoIcon }
