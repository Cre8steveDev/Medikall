import { Link } from 'react-router-dom';

// Define logo Component
const Logo = () => {
  return (
    <Link to="/">
      <div className="flex items-center gap-2 hover:opacity-75 transition ease-in">
        <img src="/images/vite.svg" alt="Logo" />
        <h2 className="text-2xl font-black text-primary-blue">Medikall</h2>
      </div>
    </Link>
  );
};

export default Logo;
