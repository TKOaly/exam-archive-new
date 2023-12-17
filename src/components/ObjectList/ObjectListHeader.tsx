const FileListHeader = () => {
    return (
        <div role="row" className="admin-list-row py-2">
              <div role="columnheader" className="list-row-icon">
                <span className="sr-only">Icon</span>
              </div>
              <div
                role="columnheader"
                className="admin-list-row-id self-end font-serif font-bold lowercase"
              >
                ID
              </div>
              <div
                role="columnheader"
                className="admin-list-row-filename font-serif font-bold lowercase"
              >
                Filename
              </div>
              <div
                role="columnheader"
                className="admin-list-row-filepath font-serif font-bold lowercase"
              >
                File path / Object key
              </div>
            </div>
    )
}

export default FileListHeader