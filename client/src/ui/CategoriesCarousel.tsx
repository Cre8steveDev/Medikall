// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

import { TCategoryForCarousel } from '../types/generalTypes';
import { Link } from 'react-router-dom';

// Define expected props
type CategoriesCarouselProps = {
  itemsArray: TCategoryForCarousel[];
};

const CategoriesCarousel: React.FC<CategoriesCarouselProps> = ({
  itemsArray,
}) => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          1200: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          550: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay, Pagination]}
        className={'mx-auto  md:max-w-[1300px] mySwiper w-full p-10 '}
      >
        {itemsArray.map((item) => (
          <SwiperSlide key={item.title}>
            <Link to={item.route}>
              <div className="bg-secondary-blue rounded-lg shadow-lg md:h-[150px] md:w-[150px] lg:h-[200px] lg:w-[200px] h-[100px] w-[100px] cursor-pointer p-5 flex justify-center flex-col items-center mb-5">
                <div className="object-cover w-[50%] bg-primary-blue hover:bg-primary-green p-5 rounded-full transition-colors ease-in-out duration-500">
                  <img src={item.icon} alt={item.title} />
                </div>
                <h3 className="text-xs lg:text-2xl md:text-lg font-extrabold mt-2 text-center text-slate-500">
                  {item.title}
                </h3>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CategoriesCarousel;
