import { UserActions } from "../user-actions/UserActions";
import { UserColumn } from "../user-column/UserColumn";
import { Link } from "react-router-dom";

export const UserRow = (props) => {
    const handleOnChange = (e) => {
        const isChecked = e.target.checked;
        props.onChangeCheckBox(props.user.id,isChecked);
    }
    return (
        <tr>
            <td className="px-2 py-1 sm:px-6 text-xs border-b"><input type="checkbox" className="border-gray-300 rounded h-4 w-4"  checked={props.user.selected} onChange={handleOnChange}/></td>
            <td className="px-2 py-1 sm:px-6 text-xs border-b">{props.user.id}</td>
            <td className="px-2 py-1 sm:px-6 border-b">
                <Link to={`/users/${props.user.id}`}><UserColumn user={props.user}/></Link>
            </td>
            <td className="px-2 py-1 sm:px-6 text-sm border-b">{props.user.email}</td>
            <td className="px-2 py-1 sm:px-6 text-sm border-b">
                <UserActions user={props.user} onDeleteClick={props.onDeleteClick} onEditClick={props.onEditClick}/>
            </td>
        </tr>
    );
}