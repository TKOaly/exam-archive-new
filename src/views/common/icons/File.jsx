const React = require('react')

const [DocumentIcon, PdfIcon, PhotoIcon] = [
  '/static/img/icon-document.svg',
  '/static/img/icon-pdf.svg',
  '/static/img/icon-photo.svg'
].map(src => ({ className, ...props }) => {
  return <img {...props} src={src} className={className} />
})

module.exports = {
  DocumentIcon,
  PdfIcon,
  PhotoIcon
}
