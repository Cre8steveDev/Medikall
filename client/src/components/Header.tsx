import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { maxWidthClassSettings } from '../lib/constants';
import Logo from '../ui/Logo';
// Definition for the Header Component

const Header = () => {
  const navigate = useNavigate();

  // Retrieve User from Context
  const [user, setUser] = useState(true);

  const handleSignOut = () => {
    // Implement signOut Logic
    setUser(false);
    navigate('/');
  };

  const handleSignIn = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.preventDefault();

    setUser(true);
    navigate('/');
  };

  return (
    <header className="w-full p-5 h-[90px] flex flex-col justify-center shadow-xl shadow-slate-100">
      <div
        className={
          `${maxWidthClassSettings}` + 'flex justify-between items-center'
        }
      >
        <Logo />

        <nav>
          <ul className="flex gap-4">
            {/* <Link to="/">
              <li>Home</li>
            </Link> */}
            <Link to={'/departments'}>
              <li
                className={
                  ' cursor-pointer hover:opacity-55 transition ease-in p-3 ' +
                  `${
                    location.pathname === '/departments'
                      ? ' border-blue-500  border-b-4'
                      : ''
                  }`
                }
              >
                Departments
              </li>
            </Link>
            <Link to={'/book-appointment'}>
              <li
                className={
                  ' cursor-pointer hover:opacity-55 transition ease-in p-3 ' +
                  `${
                    location.pathname === '/book-appointment'
                      ? ' border-blue-500  border-b-4'
                      : ''
                  }`
                }
              >
                Book An Appointment
              </li>
            </Link>
            <Link to={'/medidoc-chat'}>
              <li
                className={
                  ' cursor-pointer hover:opacity-55 transition ease-in p-3 ' +
                  `${
                    location.pathname === '/medidoc-chat'
                      ? ' border-blue-500  border-b-4'
                      : ''
                  }`
                }
              >
                Chat with MediDoc
              </li>
            </Link>
            {user && (
              <Link to={'/dashboard'}>
                <li
                  className={
                    ' cursor-pointer hover:opacity-55 transition ease-in p-3 ' +
                    `${
                      location.pathname === '/dashboard'
                        ? ' border-blue-500  border-b-4'
                        : ''
                    }`
                  }
                >
                  Dashboard
                </li>
              </Link>
            )}

            {!user && (
              <Link to={'/sign-in'}>
                <li
                  onClick={handleSignIn}
                  className={
                    ' cursor-pointer hover:opacity-55 transition ease-in p-3  bg-green-700 text-white'
                  }
                >
                  Get Started
                </li>
              </Link>
            )}

            {user && (
              <li
                onClick={handleSignOut}
                className="p-3  cursor-pointer bg-red-600 text-white hover:bg-opacity-50 transition ease-in"
              >
                Sign Out
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
