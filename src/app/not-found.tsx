import Link from 'next/link'

export const metadata = {
  title: '404 - Tärpistö - TKO-äly ry',
  description: 'The TKO-äly ry exam archive'
}

const NotFoundPage = () => {
  return (
    <main>
      <div className="flex flex-col items-center gap-4 py-10">
        <h2 className="mx-1 my-2 shrink font-serif text-3xl font-extrabold leading-tight">
          404 - Not Found
        </h2>
        <Link
          className="box-border bg-gray-800 p-3 font-serif lowercase text-white shadow-lg ring-inset hover:bg-gray-600 focus:ring focus:ring-gray-400"
          href="/"
        >
          Back to courselisting
        </Link>
      </div>
    </main>
  )
}

export default NotFoundPage
