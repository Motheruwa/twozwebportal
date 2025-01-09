import React, { useEffect } from "react";
import { useParams,useLocation, NavLink  } from "react-router-dom";
import PageIntro from "../components/cards/PageIntro";
import styles from "./gallerydetail.module.css";
import zimg from "../assets/pics/1.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import Title from "../components/title/Title";
import video from "../assets/vids/1.mp4";
import { BACKENDURL } from '../components/helper/Urls';

const GalleryDetail = () => {
  const { id } = useParams();
  const location=useLocation()
  const data = location.state;

  useEffect(() => {
    document.title = " Project Detail";
  }, []);


  const scrollTop=()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <PageIntro text={`Project - ${id}`} img={zimg} />
      <div className={styles.cont}>
        <div className={styles.box}>
        <Title mainTitle={'Detail'} subTitle={""}/>
          <div className={styles.gallerybox}>
            <div className={styles.vidbox}>
            {/* <div className={styles.playbox}><FaPlay/></div> */}
            <video className={styles.video} src={video} controls />
            </div>
            <div className={styles.imgsbox}>
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
        <SwiperSlide className={styles.slide}><img className={styles.zimg} src={data.pic} alt="imge2"/></SwiperSlide>
        <SwiperSlide className={styles.slide}><img className={styles.zimg} src={data.pic} alt="imge2"/></SwiperSlide>
        <SwiperSlide className={styles.slide}><img className={styles.zimg} src={data.pic} alt="imge2"/></SwiperSlide>
        <SwiperSlide className={styles.slide}><img className={styles.zimg} src={data.pic} alt="imge2"/></SwiperSlide>
      </Swiper>
            </div>
          </div>
          <div className={styles.lists}>
            <div className={styles.contlist}></div>
            <img className={styles.imgbox} src={`${BACKENDURL}/uploads/new/${data.attachment}`} alt={id} style={{objectFit:'contain'}} />
            <div className={styles.textbox}>
              <span className={styles.detailtitle}>{data.type}</span>
              <span className={styles.detaildes}>{data.description}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryDetail;
