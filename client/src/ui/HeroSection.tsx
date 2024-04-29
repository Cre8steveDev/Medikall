import { useEffect, useState } from 'react';
import { maxWidthClassSettings } from '../lib/constants';
import CountDown from './CountDown';

import { FaArrowAltCircleDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Hero Section

const HeroSection = () => {
  const [showMaleDoc, setShowMaleDoc] = useState(true);
  const [showFemaleDoc, setShowFemaleDoc] = useState(false);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setShowMaleDoc((prevShowMaleDoc) => !prevShowMaleDoc);
      setShowFemaleDoc((prevShowFemaleDoc) => !prevShowFemaleDoc);
    }, 4000);

    return () => clearInterval(slideInterval);
  }, []);

  // Handle Return of JSX
  return (
    <section
      className="w-full md:h-[calc(100vh-10px)]"
      style={{
        backgroundImage: "url('/images/hero_background.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className={`${maxWidthClassSettings} flex flex-col gap-2 items-center justify-center md:h-full overflow-x-hidden overflow-y-scroll`}
      >
        <div
          className={`flex md:flex-row flex-col items-center justify-center gap-8 h-[70%] p-5 md:p-0 mt-[20px] md:mt-0`}
        >
          {/* Left Side of the Hero Section  */}
          <div id="left" className="w-full text-center md:text-left md:w-[40%]">
            <h4 className="text-primary-blue  tracking-wider">
              Welcome to a New Experience
            </h4>
            <h2 className="text-2xl md:text-4xl lg:text-5xl md:my-3 font-extrabold text-gray-600 lg:leading-[55px]">
              Enjoy Convenience and Assurance of Quality Healthcare Solutions at
              your Finger Tips
            </h2>
            <p className="text-xs p-3 sm:p-0 sm:text-lg text-slate-600 md:my-2">
              At Medikall, we proud ourself in delivering top-notch medical
              consultations using state-of-the art technologies while
              streamlining the process for our esteed users.
            </p>

            {/* Call To Action */}
            <div className="flex flex-col md:flex-row md:gap-4 md:mb-12 items-center">
              <Link to="/book-appointment">
                <button className="mt-3 rounded-md bg-primary-green p-3 md:p-2 lg:p-5 text-white font-bold hover:bg-opacity-70 max-w-[400px]">
                  Book An Appointment
                </button>
              </Link>
              <Link to="/medidoc-chat">
                <button className="mt-3 rounded-md bg-primary-blue p-3 md:p-2 lg:p-5 text-white font-bold hover:bg-opacity-70 max-w-[400px]">
                  Chat with MediDoc 😇
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-5 mt-8 md:mt-0 mx-auto justify-center md:justify-start">
              <CountDown
                number={125}
                numberLettering="k+"
                subtitle="Happy Patients"
              />

              <CountDown
                number={99}
                numberLettering="%"
                subtitle="Great Reviews"
              />

              <CountDown
                number={60}
                numberLettering="+"
                subtitle="Qualified Doctors"
              />
            </div>
          </div>

          {/* Right Side of the Hero Section */}
          <div id="right" className="flex-2 flex justify-center lg:w-[50%]">
            <div className="flex flex-col justify-center">
              <div className="rounded-full border-4 md:h-[400px] md:w-[400px] lg:h-[600px] lg:w-[600px] h-[300px] w-[300px] bg-transparent border-primary-green flex items-center justify-center relative  ">
                {/* Position icons */}
                <img
                  src="/images/video-call.png"
                  alt="Icon"
                  className="absolute w-[80px] h-[80px] -top-[35px] animate-ping"
                />

                <img
                  src="/images/call.png"
                  alt="Icon"
                  className="absolute w-[80px] h-[80px] -left-[35px] animate-ping"
                />

                <img
                  src="/images/reaction.png"
                  alt="Icon"
                  className="absolute w-[80px] h-[80px] -right-[35px] animate-ping"
                />

                <div className="rounded-full  md:h-[320px] md:w-[320px] lg:h-[500px] lg:w-[500px] h-[240px] w-[240px] bg-gradient-to-tr from-primary-blue to-primary-green  overflow-hidden justify-center">
                  <img
                    src="/images/doctor01.png"
                    alt="Doctor Image"
                    className={
                      `${
                        showMaleDoc
                          ? 'opacity-100'
                          : 'opacity-0 translate-y-[130%]'
                      }` +
                      ' object-contain w-full transition ease-in duration-500'
                    }
                  />
                  <img
                    src="/images/doctor02.png"
                    alt="Doctor Image"
                    className={
                      `${
                        showFemaleDoc
                          ? 'opacity-100 -translate-y-[140%]'
                          : 'opacity-0'
                      }` +
                      ' object-contain w-[90%] transition ml-5 ease-in duration-500'
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="#services">
          <div className=" animate-pulse cursor-pointer items-center gap-1 hidden md:flex text-slate-700">
            Scroll Down
            <FaArrowAltCircleDown />
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
