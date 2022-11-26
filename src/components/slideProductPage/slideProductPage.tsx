import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react'; 
import { ReactNode } from 'react';
import { Navigation, Pagination, A11y } from 'swiper';

import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slideProductPage.css';


interface SliderProps {
    settings: SwiperProps;
    children: ReactNode;
}


function Slide({ settings, children } : SliderProps) {

  return (
    <>
        <Swiper modules={[Navigation, Pagination, A11y]}{...settings}>
            {children}
        </Swiper>
    </>
  );
}

export default Slide;