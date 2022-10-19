export const Button = (props) => {
    return (
        <button type={props.type?props.type:'button'} disabled={props.disable} onClick={props.onClick} className={`mx-2 inline-block inline-flex items-center px-4 py-2 ${props.color} hover:${props.hover} text-white text-sm font-medium rounded-md`}>
            <img className="h-4 w-4 mr-2" src={props.icon} alt="Button Icon" />
            {props.children}
        </button>
    );
}