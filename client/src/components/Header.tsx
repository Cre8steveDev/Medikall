import { useNavigate, Link } from 'react-router-dom';
// Definition for the Header Component

const Header = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    // Implement signOut Logic

    navigate('/');
  };

  return (
    <header>
      <div>
        <img src="" alt="Logo" />
        <h2>Medikall</h2>
      </div>
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to={'/departments'}>
            <li>Departments</li>
          </Link>
          <Link to={'/appointment'}>
            <li>Book An Appointment</li>
          </Link>
          <Link to={'/medidoc-chat'}>
            <li>Talk with MediDoc</li>
          </Link>
          <Link to={'/dashboard'}>
            <li>Dashboard</li>
          </Link>

          <Link to={'/sign-in'}>
            <li>Sign In</li>
          </Link>

          <li onClick={handleSignOut}>Sign Out</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
