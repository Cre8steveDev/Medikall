import DesktopNavBar from '../ui/DesktopNavBar';

import { maxWidthClassSettings } from '../lib/constants';
import Logo from '../ui/Logo';
import MobileNavBar from '../ui/MobileNavBar';

// Bring in the useSElector to access the userLogin State
import { useSelector } from 'react-redux';
import { TUserContext } from '../types/generalTypes';

// Definition for the Header Component

const Header = () => {
  // Retrieve User from Context
  const userCurrent: TUserContext | null = useSelector(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state: any) => state?.user?.current
  );

  return (
    <header className="w-full p-5 h-[60px] sm:h-[90px] flex flex-col justify-center shadow-xl shadow-slate-200 sticky top-0 z-10 backdrop-blur-2xl">
      <div
        className={
          `${maxWidthClassSettings}` + 'flex justify-between items-center'
        }
      >
        <Logo />
        {/* Desktop Navigation Bar */}
        <DesktopNavBar user={userCurrent} />

        {/* Mobile Navigation Bar */}
        <MobileNavBar user={userCurrent} />
      </div>
    </header>
  );
};

export default Header;

// import { useSelector } from 'react-redux';
// import { TUserContext } from '../types/generalTypes';

// const userCurrent: TUserContext | null = useSelector(
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   (state: any) => state?.user?.current
// );
