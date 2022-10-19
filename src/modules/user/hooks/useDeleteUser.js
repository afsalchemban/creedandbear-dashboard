import { useState } from "react";
import { deleteUser } from '../../../fake-api/api'
export const useDeleteUser = (
    startShowSpinner,
    stopShowSpinner,
    refetchUsers,
    selectedUsers
) => {
    /* Delete User  */

    const [showDeletePopUp, setShowDeletePopUp] = useState(false);
    const [userOnDelete, setUserOnDelete] = useState(null);

    //delete user by calling fake api
    const doDeleteUser = async (users) => {
        startShowSpinner();
        await deleteUser(users);
        stopShowSpinner();
    };
    //show pop up when delete button click
    const handleDeleteButtonClick = (user) => {
        setUserOnDelete(user);
        setShowDeletePopUp(true);
    }
    //call delete function confirm button
    const handleDeleteConfirmButtonClick = () => {
        doDeleteUser([userOnDelete.id]);
        setUserOnDelete(null);
        setShowDeletePopUp(false);
    }
    //cancel pop up
    const handleCancelDeleteUserButton = () => {
        setUserOnDelete(null);
        setShowDeletePopUp(false);
    }


    const [showMultipleDeletePopUp, setShowMultipleDeletePopUp] = useState(false);
    //delete button for checkbox
    const handleMultipleDeleteButtonClick = (user) => {
        setShowMultipleDeletePopUp(true);
    }
    //cancle button
    const handleCancelMultipleDeleteUserButton = () => {
        setShowMultipleDeletePopUp(false);
    }
    //confirm button
    const handleMultipleDeleteConfirmButtonClick = () => {
        doDeleteUser(selectedUsers);
        setShowMultipleDeletePopUp(false);
    }
    return { showDeletePopUp, handleDeleteButtonClick, handleDeleteConfirmButtonClick, handleCancelDeleteUserButton, doDeleteUser, userOnDelete, showMultipleDeletePopUp,handleCancelMultipleDeleteUserButton,handleMultipleDeleteConfirmButtonClick,handleMultipleDeleteButtonClick };
    /* ------END---- */
}