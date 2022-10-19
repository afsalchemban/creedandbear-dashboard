import { Logo } from "../../common/logo/Logo";
import { Menu } from "./components/Menu";
import { ProfileBox } from "./components/ProfileBox";

export const SideBar = (props) => {
    return (
        <div className="border-r h-full pt-3 relative">
            <Logo />
            <Menu />
            <ProfileBox />
        </div>
    );
}