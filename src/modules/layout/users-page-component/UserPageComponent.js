//user module component
import { SideBar } from '../sidebar/SideBar';
import { MobileHeader } from '../mobile-header/MobileHeader';
import { UserPage } from '../../user/UserPage';
export const UserPageComponent = () => {
    return (
      <>
        <div className="md:hidden">
          <MobileHeader />
        </div>
        <div className="flex flex-row h-full">
          <div className="hidden lg:block lg:basis-1/5">
            <SideBar />
          </div>
          <div className="w-full basis-full lg:basis-4/5">
            <UserPage />
          </div>
        </div>
      </>
    );
  }