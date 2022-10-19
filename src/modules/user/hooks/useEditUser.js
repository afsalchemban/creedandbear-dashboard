import { useState } from "react";
import { getUser, updateUser } from '../../../fake-api/api'
export const useEditUser = ({
    startShowSpinner, 
    stopShowSpinner,
    fetchUser
}) => {
    /* Edit User  */

    const [showEditPopUp, setShowEditPopUp] = useState(false);
    const [userOnEdit, setUserOnEdit] = useState(null);
    //edit button click table
    const handleEditUserButton = async (id) => {
        startShowSpinner();
        const result = await getUser(id);
        stopShowSpinner();
        setUserOnEdit(result);
        setShowEditPopUp(true);
    }
    //edit cancel button click
    const handleCancelEditUserButton = () => {
        setUserOnEdit(null);
        setShowEditPopUp(false);
    }
    //edit update button click
    const handleUpdateUserButton = async (id, userInfo) => {
        setShowEditPopUp(false);
        startShowSpinner();
        await updateUser(id, userInfo);
        stopShowSpinner();
        setUserOnEdit(null);
        fetchUser(id);
    }

    return { handleEditUserButton, handleCancelEditUserButton, handleUpdateUserButton, showEditPopUp, userOnEdit };

    /* ------END---- */
}