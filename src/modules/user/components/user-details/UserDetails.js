import { UserActions } from "../../../users/components/table/user-actions/UserActions";

export const UserDetails = (props) => {
    return (
        <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div className="border-b p-4 flex">
                <div className="relative w-12 h-12 flex-none">
                    <img className="rounded-full border border-gray-100 shadow-sm" src={props.user.avatar} alt="user" />
                </div>
                <div className="grow p-2">
                    <div className="text-sm">{props.user.first_name} {props.user.last_name}</div>
                    <div className="text-xs">@{props.user.first_name.toString().toLowerCase()}</div>
                </div>
                <UserActions user={props.user} onDeleteClick={props.onDeleteClick} onEditClick={props.onEditClick} />
            </div>
            <div>
                <table className="min-w-full leading-normal">
                    <tbody>
                        <tr>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                First name
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                {props.user.first_name}
                            </td>
                        </tr>
                        <tr>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                Last name
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                {props.user.last_name}
                            </td>
                        </tr>
                        <tr>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                Email
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                {props.user.email}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    );
}