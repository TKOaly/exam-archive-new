import '@styles/main.css'
import '@styles/vendor/normalize.css'
import Header from '@components/Header'

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head />
      <body data-instant-whitelist>
        <div className="layout">
          <Header className="layout__header" />
          {children}
        </div>

        {/* <script defer src="/static/augments.js" />
        <script defer src="/static/vendor/instantpage-5.1.0.js" /> */}
      </body>
    </html>
  )
}

export default RootLayout
