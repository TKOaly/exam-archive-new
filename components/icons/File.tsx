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
    <img
      src={src}
      role={role}
      aria-hidden={ariaHidden}
      className={className}
      alt={alt}
    />
  )
})

export { DocumentIcon, PdfIcon, PhotoIcon }
