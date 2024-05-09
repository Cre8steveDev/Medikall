import { Link } from 'react-router-dom';

// Define logo Component
const Logo = () => {
  return (
    <Link to="/">
      <div className="flex items-center gap-2 hover:opacity-75 transition ease-in">
        <img
          src="/images/logo.jpg"
          alt="Logo"
          className="w-[40px] md:w-[50px] rounded-full"
        />
        <h2 className="text-2xl font-black text-primary-blue">Medikall</h2>
      </div>
    </Link>
  );
};

export default Logo;
