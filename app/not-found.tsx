import Link from 'next/link'

const NotFoundPage = () => {
  return (
    <div className="page-container">
      <main>
        <h1>404 - Not Found</h1>
        <Link href="/">Back to listing</Link>
      </main>
    </div>
  )
}

export default NotFoundPage
