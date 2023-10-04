const Loading = ({ showManage }: { showManage: boolean }) => {
  return (
    <div
      role="row"
      className="list-row animate-pulse py-2 hover:bg-slate-100"
    >
      <div role="cell" className="h-6 w-6 mx-2 rounded-lg bg-gray-300 list-row-icon" />
      <div role="cell" className="h-6 w-96 rounded-lg bg-gray-300 list-row-name" />
      <div role="cell" className="h-6 w-24 rounded-lg bg-gray-300 list-row-date" />
      {showManage &&
        <div role="cell" className="h-6 w-10 rounded-lg bg-gray-800 mx-2 list-row-manage" />
      }
    </div>
  )
}

export default Loading
