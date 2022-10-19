import group from '../../../../assets/icons/group.png'
export const Menu = (props) => {
    return (
        <ul className="p-4">
            <li className="menu-item active inline-flex items-center px-3 py-2 text-sm font-medium w-full text-sm text-zinc-600 cursor-pointer rounded-lg hover:bg-slate-200">
                <img src={group} alt="Home" className="w-5 h-5 mr-2"/>
                Users
            </li>
        </ul>
    );
}