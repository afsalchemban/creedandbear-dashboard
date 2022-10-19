export const PaginationButton = (props) => {
    return (
        <button onClick={props.onClick} className="items-center px-3 py-1 hover:bg-slate-50  text-xs font-medium rounded-md border">
            { props.children }
        </button>
    );
}