import classnames from 'classnames'
import ArrowBack from '@components/icons/ArrowBack'

const BackButton = ({
  href,
  className
}: {
  href: string
  className: string
}) => (
  <a
    data-instant
    href={href}
    aria-label="Back to course listing"
    className={classnames('back-button', className)}
  >
    <ArrowBack className="back-button__icon" alt="Arrow pointing to the left" />
  </a>
)

interface NavigationProps {
  title: string
  backButtonHref?: string
  className?: string
}

const ListingNavigation = ({
  title,
  backButtonHref,
  className
}: NavigationProps) => (
  <nav
    className={classnames('listing-navigation', className)}
    title="Listing navigation"
  >
    <div className="listing-navigation__content">
      {backButtonHref && (
        <nav className="listing-navigation__button-container">
          <BackButton
            className="listing-navigation__back-button"
            href={backButtonHref}
          />
        </nav>
      )}
      <div className="listing-navigation__title">
        <h2 className="listing-navigation__text">{title}</h2>
      </div>
    </div>
  </nav>
)

export default ListingNavigation
