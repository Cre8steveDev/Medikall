import Carousels from './Carousels';
import { maxWidthClassSettings } from '../lib/constants';
import { ServiceOffers } from '../lib/constants';
import MobileCarousel from './MobileCarousels';

// Service Offering Section

const OurServiceOfferings = () => {
  // Handle Return of JSX
  return (
    <section
      className="w-full md:h-[calc(100vh-10px)] "
      id="services"
      style={{
        backgroundImage: "url('/images/bg_services.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className={`${maxWidthClassSettings} flex flex-col gap-2 items-center justify-center h-full md:h-full overflow-x-hidden overflow-y-scroll`}
      >
        <h2 className="text-3xl font-bold text-primary-green mt-[100px] sm:mt-0">
          Our Service Offerings
        </h2>
        <p className="text-slate-700 text-center p-3">
          We're committed to giving the best services to our clients and
          community.
        </p>
        <div className="hidden sm:block lg:w-full ">
          <Carousels itemsArray={ServiceOffers} />
        </div>

        <div className=" w-full mx-auto sm:hidden flex justify-center">
          <MobileCarousel itemsArray={ServiceOffers} />
        </div>
      </div>
    </section>
  );
};

export default OurServiceOfferings;
