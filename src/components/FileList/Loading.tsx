const Loading = ({ showManage }: { showManage: boolean }) => {
  return (
    <div role="row" className="admin-list-row animate-pulse py-2 hover:bg-slate-100">
      <div
        role="cell"
        className="list-row-icon mx-2 h-6 w-6 rounded-lg bg-gray-300"
      />
      <div
        role="cell"
        className="admin-list-row-id h-6 w-10 rounded-lg bg-gray-300"
      />
      <div
        role="cell"
        className="admin-list-row-filename h-6 w-96 rounded-lg bg-gray-300"
      />
      <div
        role="cell"
        className="admin-list-row-filepath h-6 w-96 rounded-lg bg-gray-300"
      />
    </div>
  )
}

export default Loading
