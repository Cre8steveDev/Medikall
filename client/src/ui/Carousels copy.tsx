// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

// Define expected props

import { TServiceForCarousel } from '../types/generalTypes';

type CarouselProps = {
  itemsArray: TServiceForCarousel[];
};

//
// Define Component Here
//

const Carousel: React.FC<CarouselProps> = ({ itemsArray }) => {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper max-w-full"
      >
        {itemsArray.map((item) => (
          <SwiperSlide>
            <div>
              <img src={item.image} alt="Services" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
