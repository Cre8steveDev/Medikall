import { maxWidthClassSettings } from '../lib/constants';
// Hero Section

const OurServiceOfferings = () => {
  // Handle Return of JSX
  return (
    <section className="w-full md:h-[calc(100vh-10px)]" id="services">
      <div
        className={`${maxWidthClassSettings} flex flex-col gap-2 items-center justify-center md:h-full overflow-x-hidden overflow-y-scroll`}
      >
        <div
          className={`flex md:flex-row flex-col items-center justify-center gap-8 h-[70%] p-5 md:p-0 mt-[20px] md:mt-0`}
        >
          {/* Left Side of the Hero Section  */}
          <div id="left" className="w-full text-center md:text-left md:w-[40%]">
            {/* Right Side of the Hero Section */}
            <div
              id="right"
              className="flex-2 flex justify-center lg:w-[50%]"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServiceOfferings;
