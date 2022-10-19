export const DeleteSelected = (props) => {
    return (
        props.count>0 &&
        <div data-testid="count-selected" className='float-left'>
                <div className="text-sm py-3">{props.count} Selected
                <button onClick={props.onClick} className="ml-2 items-center text-red-600 px-3 py-1 hover:bg-slate-50  text-xs font-medium rounded-md border">
                Delete
                </button>
                </div>
            </div>
    )
}