import Link from 'next/link'

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
