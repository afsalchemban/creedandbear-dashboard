import logo from '../../../assets/icons/cube.png'
export const Logo = (props) => {
    return (
        <div className="p-4">
            <img src={logo} className="App-logo inline-block" alt="logo" />
            <a className="pl-2 font-bold" href="/#">User Admin</a>
        </div>
    );
}