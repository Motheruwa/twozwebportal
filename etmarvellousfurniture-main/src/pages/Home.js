import React, { useEffect } from "react";
import styles from "./home.module.css";
import ProductShow from "../components/cards/ProductShow";
import video from "../assets/bg.mp4"
import ServiceReview from "../components/cards/ServiceReview";
import GalleryReview from "../components/cards/GalleryReview";
import Testimonials from "../components/cards/Testimonials";
// import ModelShow from "../components/ModelShow";
import { Typewriter } from 'react-simple-typewriter'
import { FaAngleDown} from "react-icons/fa";
import WorkDash from "../components/cards/WorkDash";
import IntroSwiper from "../components/cards/IntroSwiper";
const Home = () => {

  useEffect(() => {
    document.title = ' Home';
  }, []);

  return (
    <div className={styles.cont}>
      <IntroSwiper/>
      <ProductShow />
      <div className={styles.box}>
        <ServiceReview/>
      <WorkDash/>
        {/* <ModelShow/> */}
        <GalleryReview/>
        <Testimonials/>
      </div>
    </div>
  );
};

export default Home;
