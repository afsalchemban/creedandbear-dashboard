export const UserTableHeader = (props) => {
    return (
        <tr>
                        <th className="px-2 sm:px-6 py-3 text-xs font-medium bg-slate-50 border-b"><input type="checkbox" className="border-gray-300 rounded h-4 w-4" onChange={props.selectAll} /></th>
                        <th className="px-2 sm:px-6 py-3 text-xs font-medium bg-slate-50 border-b">ID</th>
                        <th className="px-2 sm:px-6 py-3 text-xs font-medium bg-slate-50 border-b">User</th>
                        <th className="px-2 sm:px-6 py-3 text-xs font-medium bg-slate-50 border-b">Email</th>
                        <th className="px-2 sm:px-6 py-3 text-xs font-medium bg-slate-50 border-b"></th>
        </tr>
    );
}