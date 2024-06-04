import { getSessionUser } from '@services/tkoUserService'

import Image from 'next/image'
import Link from 'next/link'

import {
  // MagnifyingGlassIcon,
  UserCircleIcon
} from '@heroicons/react/24/outline'

import MainMenu from '@components/MainMenu'
import Button from '@components/Button'
import TkoAlyLogo from '@media/tkoaly-logo-outline-black.svg'

const Header = async () => {
  const { name } = await getSessionUser()

  return (
    <header className="header-container box-border bg-yellow-500 transition-all">
      <Link href="/" className="header-name">
        <Image src={TkoAlyLogo} alt="TKO-äly logo" className="me-4 h-14 w-14" />
        <h1 className="font-serif text-2xl font-extrabold uppercase text-gray-800">
          Tärpistö
        </h1>
      </Link>

      {/* <div className="header-search flex flex-row border-0 border-b-4 border-gray-800 bg-transparent transition-all gap-x-1">
        <MagnifyingGlassIcon className="mx-2 h-7 w-7 shrink-0 stroke-gray-800" />
        <input
          type="text"
          className="mb-2 mt-2 box-border w-full bg-transparent text-gray-800  outline-none placeholder:text-gray-800"
          name="search"
          aria-label="Search from Tärpistö..."
          title="Search from Tärpistö..."
          placeholder="Search from Tärpistö..."
        />
        <button
          type="submit"
          className="mx-2 shrink-0 text-gray-800 hover:underline hover:decoration-cyan-500"
        >
          Search
        </button>
      </div> */}

      <MainMenu className="header-menu">
        <div className="flex flex-col gap-2">
          <div
            className="flex flex-row items-center gap-1"
            data-test-id="current-user"
          >
            <UserCircleIcon className="me-2 h-10 w-10" />
            <div className="flex flex-col gap-0">
              <span className="font-serif text-xl font-extrabold text-gray-800">
                Logged in:
              </span>
              <span>{name}</span>
            </div>
          </div>
          <form method="POST" action="/auth/signout" name="signOut">
            <Button
              type="submit"
              name="signOutButton"
              title="sign out"
              variant="outline"
            />
          </form>
        </div>
      </MainMenu>
    </header>
  )
}

export default Header
