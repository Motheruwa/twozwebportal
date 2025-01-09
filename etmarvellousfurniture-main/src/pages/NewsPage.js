import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styles from "./service.module.css";
import PageIntro from "../components/cards/PageIntro";
import zimg from "../assets/gallery.jpg";
import pic from '../assets/services/static.png'
import pic4 from '../assets/services/event.png'
import pic3 from '../assets/services/vip.png'
import pic2 from '../assets/services/vip.png'
import pic5 from '../assets/services/cctv.png'
import pic6 from '../assets/services/consolt.png'
import ProductSlide from "../components/cards/ProductSlide";
import Title from "../components/title/Title";
import NewsCard from '../components/cards/NewsCard';
import { BACKENDURL } from '../components/helper/Urls';

const NewsPage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    document.title = ' News';
  }, []);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const res = await axios.get(`${BACKENDURL}/news/all`);
        setNews(res.data.all);
      } catch (error) {
        console.error('Error fetching slide data:', error);
      }
    };

    fetchNewsData();

    // Clean-up function
    return () => {
      // Any clean-up code can go here
    };
  }, []);

  return (
    <>
      <PageIntro text={"News"} img={zimg} />
      <ProductSlide/>
      <div className={styles.cont}>
        <div className={styles.box}>
          <Title mainTitle={'Specialization and Successful Endeavors'} subTitle={""}/>
          <div className={styles.lists}>
          {news.map((l)=><NewsCard key={l.id} {...l}/>)}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsPage;
