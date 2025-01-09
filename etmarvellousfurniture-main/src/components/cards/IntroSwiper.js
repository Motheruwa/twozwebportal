import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './introswiper.module.css';

const IntroSwiper = () => {
  const [slideData, setSlideData] = useState([]);

  useEffect(() => {
    const fetchSlideData = async () => {
      try {
        const res = await axios.get('http://localhost:6969/slider/all');
        setSlideData(res.data.all);
      } catch (error) {
        console.error('Error fetching slide data:', error);
      }
    };

    fetchSlideData();

    // Clean-up function
    return () => {
      // Any clean-up code can go here
    };
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      grabCursor={true}
      loop={true}
      autoplay={{
        delay: 5000,
      }}
      modules={[Autoplay]}
      className={styles.swiper}
    >
      {slideData.map((slide, index) => (
        <SwiperSlide className={styles.swiperslide} key={index}>
          <img src={`http://localhost:6969/uploads/new/${slide.attachment}`} alt={slide.alt} />
          <span>{slide.description}</span>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default IntroSwiper;