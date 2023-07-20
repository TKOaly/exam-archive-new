const Loading = () => {
  return (
    <div
      role="row"
      className="flex max-w-full animate-pulse flex-row px-1  hover:bg-slate-100"
    >
      <div role="cell" className="m-2 box-border shrink-0 self-center">
        <div className="h-6 w-6 rounded-lg bg-gray-300" />
      </div>
      <div role="cell" className="mx-1 my-2 w-96 shrink self-center">
        <div className="h-6 rounded-lg bg-gray-300" />
      </div>
      <div
        className="ms-auto min-w-max shrink-0 flex-nowrap self-center px-2"
        role="cell"
      >
        <div className="h-6 w-20 rounded-lg bg-gray-300" />
      </div>
      <div className="m-2 self-center" role="cell">
        <div className="h-6 w-10 rounded-lg bg-gray-800 px-3  py-1" />
      </div>
    </div>
  )
}

export default Loading
