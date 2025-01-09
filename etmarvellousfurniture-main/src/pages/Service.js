import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styles from "./service.module.css";
import PageIntro from "../components/cards/PageIntro";
import zimg from "../assets/gallery.jpg";
import ProductCard from "../components/cards/ProductCard";
import pic from '../assets/services/static.png'
import pic4 from '../assets/services/event.png'
import pic3 from '../assets/services/vip.png'
import pic2 from '../assets/services/vip.png'
import pic5 from '../assets/services/cctv.png'
import pic6 from '../assets/services/consolt.png'
import ProductSlide from "../components/cards/ProductSlide";
import Title from "../components/title/Title";
import Gallerys from "./Gallerys";
import { BACKENDURL } from '../components/helper/Urls';

const Service = () => {
  const [servies, setservies] = useState([]);

  useEffect(() => {
    document.title = ' Service';
  }, []);

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const res = await axios.get(`${BACKENDURL}/service/all`);
        setservies(res.data.all);
      } catch (error) {
        console.error('Error fetching slide data:', error);
      }
    };

    fetchServiceData();

    // Clean-up function
    return () => {
      // Any clean-up code can go here
    };
  }, []);

  return (
    <>
      <PageIntro text={"Service"} img={zimg} />
      <ProductSlide/>
      <div className={styles.cont}>
        <div className={styles.box}>
          <Title mainTitle={'Specialization and Successful Endeavors'} subTitle={""}/>
          <div className={styles.lists}>
          {servies.map((l)=><ProductCard key={l.id} {...l}/>)}
          </div>
        </div>
      </div>
      <Gallerys/>
    </>
  );
};

export default Service;
