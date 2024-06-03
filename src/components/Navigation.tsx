import Link from 'next/link'

import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'

interface NavigationProps {
  children?: React.ReactNode
  title: string
  label?: string
  backButtonHref?: string
}

const ListingNavigation = ({
  children,
  title,
  label,
  backButtonHref
}: NavigationProps) => (
  <nav className="navigation-container">
    {backButtonHref && (
      <Link
        href={backButtonHref}
        title={label}
        aria-label={label}
        className="navigation-back"
      >
        <ArrowUturnLeftIcon className="h-6 w-6 m-2 stroke-gray-800 stroke-2" />
      </Link>
    )}
    <h2 className="navigation-title font-serif text-3xl font-extrabold leading-tight">
      {title}
    </h2>
    <div className="navigation-actions">
      {children}
    </div>
  </nav>
)

export default ListingNavigation
