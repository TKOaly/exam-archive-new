import Link from 'next/link'

import { EnvelopeIcon } from '@heroicons/react/24/outline'

const Footer = () => {
  return (
    <footer className="bg-gray-800 shadow-inner">
      <div className="container mx-auto box-border flex max-w-screen-lg flex-col flex-wrap gap-y-5 px-5 py-8 text-white">
        <div className="footer-container">
          <div className="footer-name">
            <span className="font-serif text-lg font-bold uppercase">
              Tärpistö
            </span>
            <span>The TKO-äly ry exam archive.</span>
          </div>
          <p className="footer-email">
            <EnvelopeIcon className="me-2 h-4 w-4 self-center stroke-white" />
            <span className="sr-only">Contact:</span>
            <a
              href="mailto:tarpisto@tko-aly.fi"
              className="hover:underline hover:decoration-cyan-500"
            >
              tarpisto@tko-aly.fi
            </a>
          </p>
          <Link
            rel="noopener"
            target="_blank"
            href="https://www.tko-aly.fi/"
            className="footer-tkoaly hover:underline hover:decoration-cyan-500"
          >
            TKO-äly ry
          </Link>
          <Link
            rel="noopener"
            target="_blank"
            href="https://www.tko-aly.fi/tietosuoja"
            className="footer-privacy hover:underline hover:decoration-cyan-500"
          >
            Privacy
          </Link>
          <Link
            rel="nofollow noopener"
            target="_blank"
            href="https://github.com/TKOaly/exam-archive-new/"
            className="footer-sourcecode hover:underline hover:decoration-cyan-500"
          >
            Source code
          </Link>
          <Link
            rel="noopener"
            target="_blank"
            href="https://fuksiwiki.tko-aly.fi/T%C3%A4rpist%C3%B6"
            className="footer-fuksiwiki hover:underline hover:decoration-cyan-500"
          >
            Fuksiwiki
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
