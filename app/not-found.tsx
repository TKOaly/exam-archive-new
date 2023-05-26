import Link from 'next/link'

export const metadata = {
  title: '404 - Tärpistö - TKO-äly ry',
  description: 'The TKO-äly ry exam archive'
}

const NotFoundPage = () => {
  return (
    <div className="page-container">
      <main>
        <h2>404 - Not Found</h2>
        <Link href="/">Back to listing</Link>
      </main>
    </div>
  )
}

export default NotFoundPage
