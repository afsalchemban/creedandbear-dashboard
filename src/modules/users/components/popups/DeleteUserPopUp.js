import { Button } from "../../../common/button/Button";
import save from '../../../../assets/icons/save.png'
import cancel from '../../../../assets/icons/cancel.png'

export const DeleteUserPopUp = (props) => {
    const deleteUser = () => {
        props.onDelete(props.user.id)
    };
    return (
        <div className="fixed z-10 overflow-y-auto top-0 w-full left-0" id="modal">
            <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-gray-900 opacity-75" />
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                <div className="py-4 px-4 border-b">
                    <ul>
                        <li className="inline py-4 border-b-2 border-indigo-700 text-indigo-700 text-sm font-medium relative top-0.5">Delete user</li>
                    </ul>
                </div>
                <div className="border-b p-4 flex">
                    <div className="relative w-12 h-12 flex-none">
                        <img className="rounded-full border border-gray-100 shadow-sm" src={props.user.avatar} alt="user" />
                    </div>
                    <div className="grow p-2">
                        <div className="text-sm">{props.user.first_name} {props.user.last_name}</div>
                        <div className="text-xs">@{props.user.first_name.toString().toLowerCase()}</div>
                    </div>
                </div>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 text-sm">
                    Are you sure to delete this user?
                </div>
                <div className="bg-gray-200 px-4 py-3 text-right">
                    <Button icon={cancel} onClick={props.onCancel} color="bg-slate-500" hover="bg-slate-600">Cancel</Button>
                    <Button icon={save} onClick={deleteUser} color="bg-indigo-700" hover="bg-indigo-800">Confirm</Button>
                </div>
                </div>
            </div>
            </div>  
    );
}