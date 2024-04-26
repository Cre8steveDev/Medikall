import { LuMenuSquare } from 'react-icons/lu';
import { IoCloseCircle } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// DesktopNavigation Bar

const MobileNavBar = ({
  user,
  setUser,
}: {
  user: boolean;
  setUser: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();
  const [showNavMenu, setShowNavMenu] = useState(false);

  const handleSignOut = () => {
    // Implement signOut Logic
    setShowNavMenu(false);
    setUser(false);
    navigate('/');
  };

  const handleSignIn = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.preventDefault();
    setShowNavMenu(false);
    setUser(true);
    navigate('/');
  };

  const handleMenuNavigate = (route: string) => {
    setShowNavMenu(false);
    navigate(route);
  };

  return (
    <nav className="lg:hidden " id="mobile-nav">
      <div
        onClick={(e) => {
          e.preventDefault();
          setShowNavMenu((prev) => !prev);
        }}
      >
        <LuMenuSquare className="text-4xl text-primary-green hover:text-primary-blue transition ease-in cursor-pointer" />
      </div>

      {showNavMenu && (
        <ul
          className="bg-white z-30 flex flex-col gap-4 w-full min-h-screen h-screen fixed top-0 left-0 p-16 justify-center items-center backdrop-blur-xl  text-[18px]"
          onClick={() => setShowNavMenu(false)}
        >
          <li
            onClick={() => handleMenuNavigate('/departments')}
            className={
              ' cursor-pointer hover:opacity-55 transition ease-in p-3 ' +
              `${
                location.pathname === '/departments' &&
                ' border-blue-500  border-b-4'
              }`
            }
          >
            Departments
          </li>

          <li
            onClick={() => handleMenuNavigate('/book-appointment')}
            className={
              ' cursor-pointer hover:opacity-55 transition ease-in p-3 ' +
              `${
                location.pathname === '/book-appointment' &&
                ' border-blue-500  border-b-4'
              }`
            }
          >
            Book An Appointment
          </li>

          <li
            onClick={() => handleMenuNavigate('/medidoc-chat')}
            className={
              ' cursor-pointer hover:opacity-55 transition ease-in p-3 ' +
              `${
                location.pathname === '/medidoc-chat' &&
                ' border-blue-500  border-b-4'
              }`
            }
          >
            Chat with MediDoc
          </li>

          {user && (
            <li
              onClick={() => handleMenuNavigate('/dashboard')}
              className={
                ' cursor-pointer hover:opacity-55 transition ease-in p-3 ' +
                `${
                  location.pathname === '/dashboard' &&
                  ' border-blue-500  border-b-4'
                }`
              }
            >
              Dashboard
            </li>
          )}

          {!user && (
            <li
              onClick={handleSignIn}
              className={
                ' cursor-pointer hover:opacity-55 transition ease-in p-3  bg-primary-green text-white rounded-lg font-bold mt-10 w-full text-center max-w-[300px]'
              }
            >
              Get Started
            </li>
          )}

          {user && (
            <li
              onClick={handleSignOut}
              className="p-3  cursor-pointer bg-red-600 text-white hover:bg-opacity-50 transition ease-in rounded-lg mt-10 w-full text-center max-w-[300px]"
            >
              Sign Out
            </li>
          )}

          <IoCloseCircle
            className="text-4xl absolute top-8 right-6 hover:text-red-600"
            onClick={() => setShowNavMenu(false)}
          />
        </ul>
      )}
    </nav>
  );
};

export default MobileNavBar;
