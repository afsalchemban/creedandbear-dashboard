import { Button } from "../../../common/button/Button";
import save from '../../../../assets/icons/save.png'
import cancel from '../../../../assets/icons/cancel.png'
import { useState } from "react";
export const AddUserPopUp = (props) => {
      const [userInfo, setUserInfo] = useState({
        first_name: "",
        last_name: "",
        email: "",
      });
      const handleChange = (event) => {
        setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
      };
      const handleSubmit = (event) => {
        // prevents the submit button from refreshing the page
        event.preventDefault();
        props.onSubmit(userInfo);
        setUserInfo({
            first_name: "",
            last_name: "",
            email: "",
        });
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
                        <li className="inline py-4 border-b-2 border-indigo-700 text-indigo-700 text-sm font-medium relative top-0.5">Add user</li>
                    </ul>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 text-sm">
                        <label>First Name</label>
                        <input type="text" required name="first_name" className="w-full bg-gray-100 p-2 mt-2 mb-3  border rounded-md" value={userInfo.first_name} onChange={handleChange}/>
                        <label>Last Name</label>
                        <input type="text" required name="last_name" className="w-full bg-gray-100 p-2 mt-2 mb-3  border rounded-md" value={userInfo.last_name}  onChange={handleChange}/>
                        <label>Email</label>
                        <input type="email" required name="email" className="w-full bg-gray-100 p-2 mt-2 mb-3  border rounded-md" value={userInfo.email} onChange={handleChange} />
                    </div>
                    <div className="bg-gray-200 px-4 py-3 text-right">
                        <Button icon={cancel} onClick={props.onCancel} color="bg-slate-500" hover="bg-slate-600">Cancel</Button>
                        <Button icon={save} color="bg-indigo-700" type="submit" hover="bg-indigo-800">Save</Button>
                    </div>
                </form>
                </div>
            </div>
            </div>  
    );
}