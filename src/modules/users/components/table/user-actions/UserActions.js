import trash from '../../../../../assets/icons/trash.png'
import edit from '../../../../../assets/icons/edit.png'
export const UserActions = (props) => {
    const deleteUser = () =>{
        props.onDeleteClick(props.user);
    }
    const editUser = () =>{
        props.onEditClick(props.user.id);
    }
    return (
        <div>
            <button data-testid="delete-element" onClick={deleteUser} className="inline-block p-1 sm:mx-2 sm:p-2 cursor-pointer hover:bg-slate-100  rounded-md">
                <img className="w-4 h-4" src={trash} alt="Delete" />
            </button>
            <button data-testid="edit-element" onClick={editUser} className="inline-block p-1 sm:mx-2 sm:p-2 cursor-pointer hover:bg-slate-100  rounded-md">
                <img className="w-4 h-4" src={edit} alt="Edit" /> 
            </button>
        </div>
    );
}