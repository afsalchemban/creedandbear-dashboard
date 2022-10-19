import { useState } from "react";
import { addUser } from '../../../fake-api/api'

export const useAddUser = ({refetchUsers,startShowSpinner, stopShowSpinner}) => {
    /* Add User  */
    
    const [showAddPopUp, setShowAddPopUp] = useState(false);
    // show pop up
    const handleAddUserButton = () => {
        setShowAddPopUp(true);
    }
    //hide pop up when cancel button click
    const handleCancelAddUserButton = () => {
        setShowAddPopUp(false);
    }
    //save user when confirm
    const handleSaveAddUserButton = async (userInfo) => {
        startShowSpinner();
        const result = await addUser(userInfo);
        stopShowSpinner();
        setShowAddPopUp(false);
        refetchUsers();
    }

    return {handleAddUserButton, handleCancelAddUserButton, handleSaveAddUserButton, showAddPopUp};

    /* ------END---- */
}