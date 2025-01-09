import React from 'react'
import zimg1 from "../assets/contact.jpg";
import zimg2 from "../assets/contact.jpg";
import zimg3 from "../assets/contact.jpg";
import zimg4 from "../assets/contact.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import styles from './modelshow.module.css'
const ModelShow = () => {
  return (
    <div className={styles.box}>
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            pagination={{
              clickable: true,
            }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
            modules={[Autoplay, Pagination]}
        className={styles.myswiper}
      >
        <SwiperSlide className={styles.slide}><img className={styles.zimg} src={zimg1} alt="imge2"/></SwiperSlide>
        <SwiperSlide className={styles.slide}><img className={styles.zimg} src={zimg2} alt="imge2"/></SwiperSlide>
        <SwiperSlide className={styles.slide}><img className={styles.zimg} src={zimg3} alt="imge2"/></SwiperSlide>
        <SwiperSlide className={styles.slide}><img className={styles.zimg} src={zimg4} alt="imge2"/></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ModelShow