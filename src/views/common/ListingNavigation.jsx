const React = require('react')
const classnames = require('classnames')
const ArrowBack = require('./icons/ArrowBack')

const BackButton = ({ href, className }) => (
  <a
    data-instant
    href={href}
    aria-label="Back to course listing"
    className={classnames('back-button', className)}
  >
    <ArrowBack className="back-button__icon" alt="Arrow pointing to the left" />
  </a>
)

const ListingNavigation = ({
  title,
  backButtonLabel,
  backButtonHref,
  className
}) => (
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
            label={backButtonLabel}
          />
        </nav>
      )}
      <div className="listing-navigation__title">
        <h2 className="listing-navigation__text">{title}</h2>
      </div>
    </div>
  </nav>
)

module.exports = ListingNavigation
