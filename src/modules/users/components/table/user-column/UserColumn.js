export const UserColumn = (props) => {
    return (
            <div className="flex">
                <div className="relative w-12 h-12 flex-none">
                    <img className="rounded-full border border-gray-100 shadow-sm" src={props.user.avatar} alt="avatar" />
                </div>
                <div className="grow p-2">
                    <div className="text-sm">{props.user.first_name} {props.user.last_name}</div>
                    <div className="text-xs">@{props.user.first_name.toString().toLowerCase()}</div>
                </div>
            </div>
    );
}