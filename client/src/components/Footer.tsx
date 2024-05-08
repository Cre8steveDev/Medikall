// Definition for the Footer Page
import Logo from '../ui/Logo';
import { FooterCompanyLinks, FooterQuickLinks } from '../lib/constants';

import { FaLocationDot } from 'react-icons/fa6';
import { FaPhoneSquareAlt } from 'react-icons/fa';

import { maxWidthClassSettings } from '../lib/constants';
import SubscribeNewsletter from '../ui/SubscribeNewsletter';
import SocialLinks from '../ui/SocialLinks';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      className={`p-5  mt-20 bg-gradient-to-r from-secondary-blue to-secondary-green`}
    >
      <SubscribeNewsletter />

      <div
        className={`${maxWidthClassSettings} md:grid grid-cols-5 gap-3 flex flex-wrap`}
      >
        <div className="md:col-span-2 flex flex-col items-center md:items-start">
          <Logo />
          <p className="md:my-3 text-gray-700 p-3 text-[12px] xs:text-[16px] leading-normal text-center md:text-left">
            Medikall is a Modern Web Application that aims to solve the often
            problem of crowded General Practic Clinks by offering clients a
            seamless platform to book appointments and provide doctors with a
            quick summary of medical history and/or presenting complaints
          </p>

          <SocialLinks />
        </div>

        <div className="flex-1 md:col-span-1 text-sm md:text-base">
          <h2 className="font-bold text-lg text-slate-700">Company</h2>
          {FooterCompanyLinks.map((link) => (
            <Link to={link.link} key={link.link}>
              <p className="my-2 cursor-pointer text-slate-600 hover:text-slate-900 transition ease-in hover:translate-x-2 xs:text-[16px] text-[12px]">
                {link.title}
              </p>
            </Link>
          ))}
        </div>

        <div className="flex-1 md:col-span-1 text-sm md:text-base">
          <h2 className="font-bold text-lg text-slate-700">Quick Links</h2>
          {FooterQuickLinks.map((link) => (
            <Link to={link.link} key={link.link}>
              <p className="my-2 cursor-pointer text-slate-600 hover:text-slate-900 transition ease-in hover:translate-x-2 xs:text-[16px] text-[12px]">
                {link.title}
              </p>
            </Link>
          ))}
        </div>

        <div className="flex-1 md:col-span-1 text-slate-600 text-sm md:text-base">
          <h2 className="font-bold text-lg text-slate-700 flex gap-2 items-center">
            <FaLocationDot className="hidden sm:block" /> Office Info
          </h2>
          <p className=" mt-3 xs:text-[16px] text-[12px]">
            41 Cre8Steve Office Complex, Edo State, Nigeria{' '}
          </p>

          <p className="flex gap-3 mt-3 hover:text-primary-blue xs:text-[16px] text-[12px]">
            <a href="mailto:cre8stevedev@gmail.com">cre8stevedev @gmail.com</a>
          </p>

          <a href="tel:+2348174050194">
            <p className="flex gap-3 items-center mt-3 hover:text-primary-blue xs:text-[16px] text-[12px]">
              <FaPhoneSquareAlt className="hidden sm:block" /> (+234)
              8174-050194
            </p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
