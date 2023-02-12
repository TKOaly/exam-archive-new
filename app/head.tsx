const Head = () => {
  const title = 'placeholder'
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="robots" content="noindex" />
      {/* <link rel="prefetch" href="/static/augments.js" /> */}
      <meta name="viewport" content="width=device-width" />
      <title>
        {title ? `${title} - Tärpistö - TKO-äly ry` : 'Tärpistö - TKO-äly ry'}
      </title>
    </>
  )
}

export default Head
