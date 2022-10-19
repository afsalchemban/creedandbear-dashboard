export const Breadcrumb = ({id}) => {
    return (
        <div className="py-1 border-b text-sm">
            <ol className="list-reset p-2 pl-0 rounded flex bg-grey-light text-grey">
                <li ><span  className="no-underline text-indigo">Home</span></li>
                <li>/</li>
                <li className="px-2"><span className="no-underline text-indigo">Users</span></li>
                <li>/</li>
                <li className="px-2">{id}</li>
            </ol>
        </div>
    );
}