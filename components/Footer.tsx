import Link from 'next/link'

import { EnvelopeIcon } from '@heroicons/react/24/outline'

const Footer = () => {
  return (
    <footer className="bg-gray-800 shadow-inner">
      <div className="container mx-auto box-border flex max-w-screen-lg flex-col flex-wrap gap-y-5 px-5 py-8 text-white">
        <div className="flex flex-col">
          <p>
            <span className="font-serif text-lg font-bold uppercase">
              Tärpistö
            </span>{' '}
            - The TKO-äly ry exam archive.
          </p>
          <p className="inline-flex">
            <EnvelopeIcon className="me-2 h-4 w-4 self-center stroke-white" />
            <span className="sr-only">Contact:</span>
            <a
              href="mailto:tarpisto@tko-aly.fi"
              className="hover:underline hover:decoration-cyan-500"
            >
              tarpisto@tko-aly.fi
            </a>
          </p>
        </div>
        <div
          className="flex flex-col divide-x-0 divide-y sm:flex-row sm:divide-x sm:divide-y-0"
          data-test-id="footer-links"
        >
          <Link
            rel="noopener"
            target="_blank"
            href="https://www.tko-aly.fi/"
            className="py-2 hover:underline hover:decoration-cyan-500 sm:py-0 sm:pe-3"
          >
            TKO-äly ry
          </Link>
          <Link
            rel="noopener"
            target="_blank"
            href="https://www.tko-aly.fi/tietosuoja"
            className="py-2 hover:underline hover:decoration-cyan-500 sm:px-3 sm:py-0"
          >
            Privacy
          </Link>
          <Link
            rel="nofollow noopener"
            target="_blank"
            href="https://github.com/TKOaly/exam-archive-new/"
            className="py-2 hover:underline hover:decoration-cyan-500 sm:px-3 sm:py-0"
          >
            Source code
          </Link>
          <Link
            rel="noopener"
            target="_blank"
            href="https://fuksiwiki.tko-aly.fi/T%C3%A4rpist%C3%B6"
            className="py-2 hover:underline hover:decoration-cyan-500 sm:py-0 sm:ps-3"
          >
            Fuksiwiki
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
