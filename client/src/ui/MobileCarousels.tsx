// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';

import { TServiceForCarousel } from '../types/generalTypes';
import { BsArrowRight } from 'react-icons/bs';

import { Link } from 'react-router-dom';

type CarouselProps = {
  itemsArray: TServiceForCarousel[];
};

const MobileCarousel: React.FC<CarouselProps> = ({ itemsArray }) => {
  return (
    <>
      <Swiper
        effect={'cards'}
        cardsEffect={{ slideShadows: false }}
        grabCursor={true}
        modules={[EffectCards]}
        className={'mx-auto w-full mySwiper p-5 h-[650px] '}
      >
        {itemsArray.map((item) => (
          <SwiperSlide key={item.color}>
            <div className="bg-white rounded-lg h-[480px] w-[300px] cursor-grab p-5 relative ml-7 shadow-lg">
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

              <h2 className="text-2xl font-bold mt-5 p-2 text-primary-blue">
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

export default MobileCarousel;
