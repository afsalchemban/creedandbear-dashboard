import add from '../../../../assets/icons/add.png'
export const AddUserButton = (props) => {
    return (
        <button onClick={props.onClick} className="inline-block inline-flex items-center px-4 py-2 bg-indigo-700 hover:bg-indigo-800 text-white text-xs sm:text-sm font-medium rounded-md">
            <img className="h-4 w-4 mr-2" src={add} alt="Add" />
            Add user
        </button>
    );
}