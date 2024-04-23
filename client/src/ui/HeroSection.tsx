import { maxWidthClassSettings } from '../lib/constants';
import CountDown from './CountDown';

// Hero Section

const HeroSection = () => {
  return (
    <section className="w-full h-[calc(100vh-10px)] bg-secondary-blue">
      <div
        className={`${maxWidthClassSettings} flex flex-col gap-2 items-center justify-center h-full`}
      >
        <div className={`flex items-center justify-center gap-8 h-[70%]`}>
          {/* Left Side of the Hero Section  */}
          <div id="left" className="w-[40%]">
            <h4>Welcome to a New Experience</h4>
            <h2>
              Enjoy Convenience and Assurance of Quality Healthcare Solutions at
              your Finger Tips
            </h2>
            <p>
              At Medikall, we proud ourself in delivering top-notch medical
              consultations using state-of-the art technologies while
              streamlining the process for our esteed users.
            </p>

            {/* Call To Action */}
            <div>
              <button>Book An Appointment</button>
              <button>Chat with MediDoc 😇</button>
            </div>

            {/* Stats */}
            <div className="flex gap-5">
              <CountDown
                number={125}
                numberLettering="k+"
                subtitle="Happy Patients"
              />

              <CountDown
                number={99}
                numberLettering="%"
                subtitle="Great Reviews ⭐"
              />

              <CountDown
                number={60}
                numberLettering="+"
                subtitle="Qualified Doctors"
              />
            </div>
          </div>

          {/* Right Side of the Hero Section */}
          <div id="right" className="flex-2 flex justify-center w-[50%]">
            <div className="flex flex-col justify-center">
              <div className="rounded-full border-4 h-[600px] w-[600px] bg-transparent border-primary-green flex items-center justify-center relative">
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

                <div className="rounded-full h-[500px] w-[500px] bg-primary-green"></div>
              </div>
            </div>
          </div>
        </div>
        <a href="#category">
          <div className=" animate-pulse cursor-pointer">Scroll Down</div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
