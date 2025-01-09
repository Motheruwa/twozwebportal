import React, { useEffect, useState } from 'react'
import styles from './productslide.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay,Navigation  } from 'swiper/modules';
import { MdCameraswitch, MdSecurity } from "react-icons/md";
import { IoMdAlarm } from "react-icons/io";

import {FaBriefcase, FaCarAlt, FaChalkboardTeacher, FaCoins, FaShieldAlt, FaUsers } from 'react-icons/fa'
import Title from '../title/Title';

const ProductSlide = () => {
    const galleryData=[
        {
          "id": 1,
          "name": "Static Guarding",
          "description": "Trained and Experienced",
          "pic":<FaShieldAlt size={70} color='white'/>
        },
        {
          "id": 2,
          "name": "Alarm Response",
          "description": "Available 24/7",
          "pic":<IoMdAlarm size={70} color='white'/>
        },
        {
          "id": 4,
          "name": "VIP Protection",
          "description": "",
          "pic":<MdSecurity size={70} color='white'/>
        },
        {
          "id": 5,
          "name": "Event Security",
          "description": "For concert and programs",
          "pic":<FaUsers size={70} color='white'/>
        },
        {
          "id": 6,
          "name": "Security Consultancy",
          "description": "",
          "pic":<FaBriefcase size={70} color='white'/>
        },
        {
          "id": 7,
          "name": "Mining Security",
          "description": "",
          "pic":<FaCoins size={70} color='white'/>
        },
        {
          "id": 8,
          "name": "Mobile Patrol",
          "description": "",
          "pic":<FaCarAlt size={70} color='white'/>
        },
        {
          "id": 9,
          "name": "Training",
          "description": "",
          "pic":<FaChalkboardTeacher size={70} color='white'/>
        },
        {
          "id": 10,
          "name": "CCTV Monitoring",
          "description": "",
          "pic":<MdCameraswitch size={70} color='white'/>
        },
      ]
      
      const [currentSlideIds, setCurrentSlideIds] = useState([]);
      const [middleItemId, setMiddleItemId] = useState(null);

      const handleSlideChange = (swiper) => {
        const { activeIndex, slides } = swiper;
        const visibleSlideIds = slides
          .filter((slide, index) => index >= activeIndex && index < activeIndex + swiper.params.slidesPerView)
          .map((slide) => parseInt(slide.getAttribute('data-id'), 10));
    
        setCurrentSlideIds(visibleSlideIds);
      };
    
      useEffect(() => {
        if (currentSlideIds.length > 0) {
          const middleIndex = Math.floor(currentSlideIds.length / 2);
          setMiddleItemId(currentSlideIds[middleIndex]);
        } else {
          setMiddleItemId(null);
        }
      }, [currentSlideIds]);
    

  // const getCurrentVisibleItemIds = () => {
  //   return currentSlideIds;
  // };

  return (
    <div className={styles.cont}>
          <Title mainTitle={'Featured Services'} subTitle={"CHECK OUT OUR PRODUCTS AND SERVICE"}/>
          <div className={styles.list}>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            onSlideChange={handleSlideChange} 
            loop={true}
            breakpoints={{
              '@0.00': {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              '@0.50': {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              '@0.75': {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              '@1.00': {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              '@1.50': {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
            modules={[Autoplay,Navigation ]}
        className={styles.myswiper}
      >
        {galleryData.map((l)=>(
            <SwiperSlide className={styles.slide} key={l.id} data-id={l.id}>
            <div className={middleItemId===l.id ?styles.activeitembox:styles.itembox} >
                {/* <Image width={120} height={120} src={l.pic} alt={l.name}/> */}
                <span>{l.pic}</span>
                <div className={styles.itemtxt}>
                    <span className={styles.itemtitle}>{l.name}</span>
                    <span className={styles.itemdes}>{l.description}</span>
                </div>
            </div>
            
        </SwiperSlide>
        ))}
        {/* <div className={styles.customNavigation}>
              <FaAngleLeft className={styles.navbtnl}/>
              <FaAngleRight className={styles.navbtnr}/>
          </div> */}
      </Swiper>

          </div>
    </div>
  )
}

export default ProductSlide