export const SearchBar = (props) => {
    const handleOnChange = (e) => {
        props.onChange(e.target.value)
    }
    return (
        <div className="float-right w-full sm:w-fit my-2">
            <div className="font-sans text-black bg-white items-center justify-center">
            <div className="border rounded overflow-hidden flex">
                <button className=" items-center justify-center px-2 border-l">
                    <svg className="h-4 w-4 text-grey-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
                </button>
                <input type="text" onChange={handleOnChange} className="px-2 py-2 focus:outline-none" placeholder="Search..." /> 
            </div>
            </div>
        </div>
    );
}