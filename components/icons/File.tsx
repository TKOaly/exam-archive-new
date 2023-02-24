interface IconProps {
  alt: string
  className: string
  role: string
  ariaHidden: boolean
}

const [DocumentIcon, PdfIcon, PhotoIcon] = [
  '/static/img/icon-document.svg',
  '/static/img/icon-pdf.svg',
  '/static/img/icon-photo.svg'
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
