// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

// Define expected props

import { TServiceForCarousel } from '../types/generalTypes';
import { BsArrowRight } from 'react-icons/bs';
import { maxWidthClassSettings } from '../lib/constants';
import { Link } from 'react-router-dom';

type CarouselProps = {
  itemsArray: TServiceForCarousel[];
};

const Carousel: React.FC<CarouselProps> = ({ itemsArray }) => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay, Pagination]}
        className={`${maxWidthClassSettings}` + 'mySwiper w-full p-10 '}
      >
        {itemsArray.map((item) => (
          <SwiperSlide key={item.color}>
            <div className="bg-white rounded-lg shadow-lg h-[480px] w-[380px] cursor-grab p-5 relative">
              <div className="rounded-md object-cover relative">
                <img
                  src={item.image}
                  alt="Services"
                  className="w-full object-cover rounded-lg"
                />
                <div
                  style={{ backgroundColor: item.color }}
                  className="w-[40px] h-[40px] flex justify-center items-center text-white rounded-full absolute -bottom-6 right-4 text-xl"
                >
                  {item.icon}
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-2 p-2 text-primary-blue">
                {item.title}
              </h2>
              <p className="text-slate-700 px-2 mb-5">{item.description}</p>

              <Link to={item.route}>
                <p className="flex items-center gap-2 hover:gap-5 text-primary-green transition ease-in absolute bottom-7 left-7 cursor-pointer">
                  <span>Read More</span>
                  <BsArrowRight />
                </p>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
