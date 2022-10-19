//user module component
import { SideBar } from '../sidebar/SideBar';
import { UsersPage } from '../../users/UsersPage';
import { MobileHeader } from '../mobile-header/MobileHeader';
export const UsersPageComponent = () => {
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
            <UsersPage />
          </div>
        </div>
      </>
    );
  }