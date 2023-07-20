import Image from 'next/image'
import Link from 'next/link'

import {
  MagnifyingGlassIcon,
  UserCircleIcon
} from '@heroicons/react/24/outline'

import { getSession } from '@lib/sessions'

import MainMenu from '@components/MainMenu'
import TkoAlyLogo from '@media/tkoaly-logo-outline-black.svg'

const Header = async () => {
  const { user } = await getSession()

  return (
    <header className="box-border bg-yellow-500 p-2 shadow-lg ">
      <div className="mx-auto flex flex-row items-center justify-between gap-x-4 transition-all">
        <div className="flex shrink-0 basis-1/2 flex-row items-center self-center md:shrink-0 md:basis-1/4">
          <Link href="/" className="ms-2">
            <Image
              src={TkoAlyLogo}
              alt="TKO-äly logo"
              className="me-4 h-14 w-14 "
            />
          </Link>
          <Link href="/" className="ms-2">
            <h1 className="font-serif text-2xl font-extrabold uppercase text-gray-800">
              Tärpistö
            </h1>
          </Link>
        </div>
        <div className="hidden grow basis-1/2 flex-row items-center gap-x-1 border-0 border-b-4 border-gray-800 bg-transparent transition-all md:flex">
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
        </div>

        <div className="flex shrink basis-1/4 flex-row items-center justify-end md:shrink-0">
          <MainMenu>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-1">
                <UserCircleIcon className="me-2 h-10 w-10" />
                <div className="flex flex-col gap-0">
                  <span className="font-serif text-xl font-extrabold text-gray-800">
                    Logged in:
                  </span>
                  <span>{user.username}</span>
                </div>
              </div>
              <Link
                href={`/auth/signout`}
                className="box-border bg-transparent p-3 font-serif lowercase text-gray-800 shadow-lg ring ring-inset ring-gray-800 hover:bg-gray-600 hover:text-white focus:ring-gray-400"
              >
                sign out
              </Link>
            </div>
          </MainMenu>
        </div>
      </div>
    </header>
  )
}

export default Header
