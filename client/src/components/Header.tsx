import { useState } from 'react';
import DesktopNavBar from '../ui/DesktopNavBar';

import { maxWidthClassSettings } from '../lib/constants';
import Logo from '../ui/Logo';
import MobileNavBar from '../ui/MobileNavBar';
// Definition for the Header Component

const Header = () => {
  // Retrieve User from Context
  const [user, setUser] = useState(true);

  return (
    <header className="w-full p-5 h-[90px] flex flex-col justify-center shadow-xl shadow-slate-100 sticky top-0 z-10 backdrop-blur-xl">
      <div
        className={
          `${maxWidthClassSettings}` + 'flex justify-between items-center'
        }
      >
        <Logo />
        {/* Desktop Navigation Bar */}
        <DesktopNavBar user={user} setUser={setUser} />

        {/* Mobile Navigation Bar */}
        <MobileNavBar user={user} setUser={setUser} />
      </div>
    </header>
  );
};

export default Header;
