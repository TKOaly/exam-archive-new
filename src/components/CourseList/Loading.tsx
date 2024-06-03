const Loading = ({ showManage }: { showManage: boolean }) => {
  return (
    <div role="row" className="list-row animate-pulse py-2 hover:bg-slate-100">
      <div
        role="cell"
        className="list-row-icon mx-2 h-6 w-6 rounded-lg bg-cyan-500"
      />
      <div
        role="cell"
        className="list-row-name h-6 w-96 rounded-lg bg-gray-300"
      />
      <div
        role="cell"
        className="list-row-date h-6 w-24 rounded-lg bg-gray-300"
      />
      {showManage && (
        <div
          role="cell"
          className="list-row-manage mx-2 h-6 w-10 rounded-lg bg-gray-800"
        />
      )}
    </div>
  )
}

export default Loading
