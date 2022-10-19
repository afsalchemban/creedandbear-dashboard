/* Components */
import { PageTitle } from "../common/page-title/PageTitle";
import { AddUserButton } from "./components/add-user-button/AddUserButton";
import { Tabs } from "./components/tabs/Tabs";
import { UsersTable } from "./components/table/UsersTable";
import { WidgetsRow } from "./components/widget/WidgetsRow";
import { AddUserPopUp } from "./components/popups/AddUserPopUp";
import { EditUserPopUp } from "./components/popups/EditUserPopUp";
import { DeleteUserPopUp } from "./components/popups/DeleteUserPopUp";
import { DeleteMultipleUsersPopUp } from "./components/popups/DeleteMultipleUsersPopUp";
import { Spinner } from "../common/spinner/Spinner";


/* Hooks */
import { useTable } from './hooks/useTable';
import { useSpinner } from './hooks/useSpinner';
import { useAddUser } from './hooks/useAddUser';
import { useEditUser } from "./hooks/useEditUser";
import { useCheckboxCount } from "./hooks/useCheckboxCount";
import { useDeleteUser } from "./hooks/useDeleteUser";

export const UsersPage = (props) => {

    /* Spinner functions */
    const {
        showSpinner,
        startShowSpinner,
        stopShowSpinner
    } = useSpinner();

    /* User Table fetching , paginations */
    const {
        paginate,
        users,
        refetchUsers,
        handleNextButtonClick,
        handlePreviousButtonClick,
        handleCheckBoxChange,
        handleSelectAll,
        handleSearchBar
    } = useTable({
        startShowSpinner,
        stopShowSpinner
    });

    /* Calculates how much checkbox selected */
    const {
        selectedCount,
        selectedUsers
    } = useCheckboxCount(users);

    /* Add User */
    const {
        showAddPopUp,
        handleAddUserButton,
        handleCancelAddUserButton,
        handleSaveAddUserButton,
    } = useAddUser({
        refetchUsers,
        startShowSpinner,
        stopShowSpinner,
    });

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
        refetchUsers
    })

    /* Delete User */
    const {
        showDeletePopUp,
        userOnDelete,
        showMultipleDeletePopUp,
        handleDeleteButtonClick,
        handleDeleteConfirmButtonClick,
        handleCancelDeleteUserButton,
        handleCancelMultipleDeleteUserButton,
        handleMultipleDeleteConfirmButtonClick,
        handleMultipleDeleteButtonClick
    } = useDeleteUser(
        startShowSpinner,
        stopShowSpinner,
        refetchUsers,
        selectedUsers
    );




    return (
        <div className="pt-3">
            <div className="px-3 py-2 sm:px-7 sm:py-4">
                <div className="sm:inline-flex items-center justify-between w-full">
                    <PageTitle>Users</PageTitle>
                    <AddUserButton onClick={handleAddUserButton} />
                </div>
                <Tabs />
                <WidgetsRow total={paginate != null ? paginate.total : 0} />
                {paginate != null &&
                    <UsersTable
                        paginate={paginate}
                        users={users}
                        onNextClick={handleNextButtonClick}
                        onPreviousClick={handlePreviousButtonClick}
                        onDeleteClick={handleDeleteButtonClick}
                        onMultipleDeleteClick={handleMultipleDeleteButtonClick}
                        onEditClick={handleEditUserButton}
                        onCheckBoxSelect={handleCheckBoxChange}
                        selectedCount={selectedCount}
                        onSelectAll={handleSelectAll}
                        onSearch={handleSearchBar}
                    />}
                {showAddPopUp && <AddUserPopUp onCancel={handleCancelAddUserButton} onSubmit={handleSaveAddUserButton} />}
                {showEditPopUp && <EditUserPopUp onCancel={handleCancelEditUserButton} onUpdate={handleUpdateUserButton} user={userOnEdit} />}
                {showDeletePopUp && <DeleteUserPopUp onCancel={handleCancelDeleteUserButton} onDelete={handleDeleteConfirmButtonClick} user={userOnDelete} />}
                {showMultipleDeletePopUp && <DeleteMultipleUsersPopUp onCancel={handleCancelMultipleDeleteUserButton} onDelete={handleMultipleDeleteConfirmButtonClick} selectedCount={selectedCount} />}
                {showSpinner && <Spinner />}

            </div>
        </div>
    );

}