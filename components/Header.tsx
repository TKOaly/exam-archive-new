import classnames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

const Header = ({ className }: { className: string }) => {
  const cls = classnames('header', className)

  return (
    <header className={cls}>
      <div className="header__container">
        <Link href="/" className="header__link">
          <Image
            src="/img/tkoaly-logo-outline-black.svg"
            alt="TKO-äly logo"
            className="header__logo"
            width={55}
            height={55}
          />
        </Link>
        <div className="header__text">
          <h1 className="header__title">Tärpistö</h1>
          <p className="header__subtitle">The TKO-äly ry exam archive</p>
        </div>
      </div>
    </header>
  )
}

export default Header
