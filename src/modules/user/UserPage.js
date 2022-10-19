/* Components */
import { PageTitle } from "../common/page-title/PageTitle";
import { EditUserPopUp } from "../users/components/popups/EditUserPopUp";
import { DeleteUserPopUp } from "../users/components/popups/DeleteUserPopUp";
import { Spinner } from "../common/spinner/Spinner";


/* Hooks */
import { useSpinner } from "./hooks/useSpinner";
import { useEditUser } from "./hooks/useEditUser";
import { useDeleteUser } from "./hooks/useDeleteUser";
import { Breadcrumb } from "./components/breadcrumb/Breadcrumb";
import { useParams , useNavigate } from 'react-router-dom';
import { UserDetails } from "./components/user-details/UserDetails";
import { useFetch } from "./hooks/useFetch";

export const UserPage = (props) => {

    const navigate = useNavigate();

    let { id } = useParams();

    /* Spinner functions */
    const {
        showSpinner,
        startShowSpinner,
        stopShowSpinner
    } = useSpinner();

    const {
        user,
        fetchUser
    } = useFetch(id);

    /* Edit User */
    const {
        showEditPopUp,
        userOnEdit,
        handleEditUserButton,
        handleCancelEditUserButton,
        handleUpdateUserButton,
    } = useEditUser({
        startShowSpinner,
        stopShowSpinner,
        fetchUser
    })

    /* Delete User */
    const {
        showDeletePopUp,
        userOnDelete,
        handleDeleteButtonClick,
        handleDeleteConfirmButtonClick,
        handleCancelDeleteUserButton
    } = useDeleteUser(
        startShowSpinner,
        stopShowSpinner
    );


    const handleDelete = () =>{
        handleDeleteConfirmButtonClick()
        navigate(-1)
    }

    return (
        <div className="pt-3">
            <div className="px-3 py-2 sm:px-7 sm:py-4">
                <div className="sm:inline-flex items-center justify-between w-full">
                    <PageTitle>User</PageTitle>
                </div>
                <Breadcrumb id={id}/>
                {user!==null && <UserDetails user={user} onDeleteClick={handleDeleteButtonClick} onEditClick={handleEditUserButton}/>}
                {showEditPopUp && <EditUserPopUp onCancel={handleCancelEditUserButton} onUpdate={handleUpdateUserButton} user={userOnEdit} />}
                {showDeletePopUp && <DeleteUserPopUp onCancel={handleCancelDeleteUserButton} onDelete={handleDelete} user={userOnDelete} />}
                {showSpinner && <Spinner />}

            </div>
        </div>
    );

}