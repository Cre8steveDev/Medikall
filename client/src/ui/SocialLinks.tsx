// Social Links Login
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { CgFacebook } from 'react-icons/cg';
import { RiInstagramFill } from 'react-icons/ri';

import { Link } from 'react-router-dom';

const SocialLinks = () => {
  return (
    <div className="flex gap-3 mt-3">
      <Link
        to="www.facebook.com"
        title="Medikal on Facebook"
        className="w-[40px] h-[40px] bg-white flex items-center justify-center rounded-full shadow-lg shadow-slate-200 hover:bg-primary-green transition-colors ease-in duration-500"
      >
        <CgFacebook className="text-xl text-primary-blue hover:text-white transition-colors ease-out" />
      </Link>

      <Link
        to="www.x.com"
        title="Medikal on Twitter/X"
        className="w-[40px] h-[40px] bg-white flex items-center justify-center rounded-full shadow-lg shadow-slate-200 hover:bg-primary-green transition-colors ease-in duration-500"
      >
        <FaTwitter className="text-xl text-primary-blue hover:text-white transition-colors ease-out" />
      </Link>

      <Link
        to="www.instagram.com"
        title="Medikal on Instagram"
        className="w-[40px] h-[40px] bg-white flex items-center justify-center rounded-full shadow-lg shadow-slate-200 hover:bg-primary-green transition-colors ease-in duration-500"
      >
        <RiInstagramFill className="text-xl text-primary-blue hover:text-white transition-colors ease-out" />
      </Link>

      <Link
        to="www.linkedin.com"
        title="Medikal on LinkedIn"
        className="w-[40px] h-[40px] bg-white flex items-center justify-center rounded-full shadow-lg shadow-slate-200 hover:bg-primary-green transition-colors ease-in duration-500"
      >
        <FaLinkedinIn className="text-xl text-primary-blue hover:text-white transition-colors ease-out" />
      </Link>
    </div>
  );
};

export default SocialLinks;
