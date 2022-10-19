import updown from '../../../../assets/icons/updown.png'
import { UserContext } from '../../../../context/UserContext';
import { useContext } from "react";
import { Link } from "react-router-dom";

export const ProfileBox = (props) => {
    const [loggedUser, setLoggedUser] = useContext(UserContext);
    const handleLogout = () => {
        setLoggedUser(null);
    }
    if(loggedUser!=null)
    {
        return (
            <div className="p-4 absolute w-full bottom-0">
                <div className="border rounded-lg p-4 flex">
                    <div className="relative w-12 h-12 flex-none">
                        <img className="rounded-full border border-gray-100 shadow-sm" src={loggedUser.avatar} alt="user" />
                        <div className="text-xs cursor-pointer" onClick={handleLogout}>Logout</div>
                    </div>
                    <div className="grow p-2">
                        <div className="text-sm">{loggedUser.first_name} {loggedUser.last_name}</div>
                        <div className="text-xs">@{loggedUser.first_name.toString().toLowerCase()}</div>
                    </div>
                    <div className="relative w-8 h-12 flex-none pt-3">
                        <img src={updown} alt="settings" className="float-right w-5 h-5"/>
                        
                    </div>
                </div>
            </div>
        );
    }
    else
    {
        return (
            <div className="p-4 absolute w-full bottom-0">
                <div className="border rounded-lg p-4 flex">
                    <div className="grow p-2">
                        <div className="text-sm">You are not logged in !</div>
                        <div className="text-xs">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}