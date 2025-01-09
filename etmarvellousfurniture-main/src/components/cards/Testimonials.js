import React from 'react'
import styles from './testimonials.module.css'
import TestmonialCard from './TestmonialCard'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Title from '../title/Title';

const Testimonials = () => {

  const testimonialsData = [
    {
      id: 1,
      name: "Abebe Bekele",
      role: "Ethiopian Security and Cleaning Services",
      rate: 4,
      note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi libero in blanditiis eveniet ipsa aspernatur architecto corporis odio!"
    },
    {
      id: 2,
      name: "Liyu Mulugeta",
      role: "Addis Ababa Security Solutions",
      rate: 5,
      note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi libero in blanditiis eveniet ipsa aspernatur architecto corporis odio!"
    },
    {
      id: 3,
      name: "Tesfaye Alemu",
      role: "Zemen Cleaning Services",
      rate: 2,
      note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi libero in blanditiis eveniet ipsa aspernatur architecto corporis odio!"
    },
    {
      id: 4,
      name: "Mekdes Tadesse",
      role: "Unity Facility Management",
      rate: 5,
      note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi libero in blanditiis eveniet ipsa aspernatur architecto corporis odio!"
    },
    {
      id: 5,
      name: "Kebede Teshome",
      role: "Alem Security Services",
      rate: 4.5,
      note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi libero in blanditiis eveniet ipsa aspernatur architecto corporis odio!"
    },
    {
      id: 6,
      name: "Hanna Girma",
      role: "Ethio Clean & Secure",
      rate: 3,
      note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi libero in blanditiis eveniet ipsa aspernatur architecto corporis odio!"
    },
    {
      id: 7,
      name: "Dereje Wolde",
      role: "Bright Guard Ethiopia",
      rate: 5,
      note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi libero in blanditiis eveniet ipsa aspernatur architecto corporis odio!"
    },
    {
      id: 8,
      name: "Sisay Worku",
      role: "CleanCare Ethiopia",
      rate: 4.5,
      note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi libero in blanditiis eveniet ipsa aspernatur architecto corporis odio!"
    },
    {
      id: 9,
      name: "Meseret Fekadu",
      role: "Shield Security Services",
      rate: 4,
      note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi libero in blanditiis eveniet ipsa aspernatur architecto corporis odio!"
    },
    {
      id: 10,
      name: "Biruk Asfaw",
      role: "Zenith Cleaning and Guarding",
      rate: 3,
      note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi libero in blanditiis eveniet ipsa aspernatur architecto corporis odio!"
    }
  ];
  
  
  return (
    <div className={styles.cont}>
          <Title mainTitle={'Testimonials'} subTitle={"Feedback from our clients"}/>
          <div className={styles.lists}>
            <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              '@0.00': {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              '@0.75': {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              '@1.00': {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              '@1.50': {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
            modules={[Autoplay, Pagination]}
        className={styles.myswiper}
      >
        {testimonialsData.map((l)=><SwiperSlide className={styles.slide} key={l.id}><TestmonialCard key={l.id} {...l}/></SwiperSlide>)}
      </Swiper>
          </div>
        </div>
  )
}

export default Testimonials