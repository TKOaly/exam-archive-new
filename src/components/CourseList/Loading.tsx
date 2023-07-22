const Loading = () => {
  return (
    <div
      role="row"
      className="flex animate-pulse flex-row items-center px-1 hover:bg-slate-100"
    >
      <div role="cell" className="m-2 box-border">
        <div className="h-6 w-6 rounded-lg bg-cyan-500" />
      </div>
      <div role="cell" className="mx-1 my-2 w-96 grow">
        <div className="h-6 rounded-lg bg-gray-300" />
      </div>
      <div className="hidden px-2 text-right sm:block" role="cell">
        <div className="h-6 w-20 rounded-lg bg-gray-300" />
      </div>
      <div className="m-2 w-10 shrink-0" role="cell">
        <div className="h-6 rounded-lg bg-gray-300" />
      </div>
    </div>
  )
}

export default Loading
