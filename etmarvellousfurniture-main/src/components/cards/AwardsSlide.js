import React, { useEffect, useState } from 'react'
import styles from './productslide.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay,Navigation  } from 'swiper/modules';
import axios from 'axios';
import { BACKENDURL } from '../helper/Urls';

import pic from '../../assets/awards/abay.png'
import pic2 from '../../assets/awards/addis.png'
import pic3 from '../../assets/awards/world.png'
import pic4 from '../../assets/awards/lion.png'
import pic5 from '../../assets/awards/enatbank.png'
import pic6 from '../../assets/awards/romel.png'
import pic7 from '../../assets/awards/alnur.png'

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import Title from '../title/Title';
import { Image } from 'antd';

const AwardsSlide = () => {
    const [galleryData, setgalleryData] = useState([]);
  
    useEffect(() => {
      const fetchAwardData = async () => {
        try {
          const res = await axios.get(`${BACKENDURL}/award/all`);
          setgalleryData(res.data.all);
        } catch (error) {
          console.error('Error fetching slide data:', error);
        }
      };
  
      fetchAwardData();
  
      // Clean-up function
      return () => {
        // Any clean-up code can go here
      };
    }, []); 
      
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
          <Title mainTitle={'Awards and Certficates'} subTitle={"CHECK OUT OUR Awards and Certficates"}/>
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
          delay: 3500,
          disableOnInteraction: false,
        }}
            modules={[Autoplay,Navigation ]}
        className={styles.myswiper}
      >
        {galleryData.map((l)=>(
            <SwiperSlide className={styles.slide} key={l.id} data-id={l.id}>
            <div className={middleItemId===l.id ?styles.activeitembox:styles.itembox} >
                <Image width={120} height={120} src={`${BACKENDURL}/uploads/new/${l.attachment}`} alt={l.name}/>
                <div className={styles.itemtxt}>
                    <span className={styles.itemtitle}>{l.type}</span>
                    <span className={styles.itemdes}>{l.companyName}</span>
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

export default AwardsSlide