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
  <nav className="flex flex-row flex-wrap items-center px-1 py-5 ">
    {backButtonHref && (
      <Link
        href={backButtonHref}
        title={label}
        aria-label={label}
        className="my-2 me-4 ms-2 box-border shrink-0"
      >
        <ArrowUturnLeftIcon className="h-6 w-6 stroke-gray-800 stroke-2 " />
      </Link>
    )}
    <h2 className="mx-1 my-2 shrink font-serif text-3xl font-extrabold leading-tight">
      {title}
    </h2>
    {children && <div className="me-2 ms-auto ">{children}</div>}
  </nav>
)

export default ListingNavigation
