interface FolderIconProps {
  alt: string
  className: string
  role: string
  ariaHidden: boolean
}

const FolderIcon = ({ alt, className, role, ariaHidden }: FolderIconProps) => (
  <img
    role={role}
    aria-hidden={ariaHidden}
    className={className}
    alt={alt}
    src="/static/img/icon-folder.svg"
  />
)

export default FolderIcon
