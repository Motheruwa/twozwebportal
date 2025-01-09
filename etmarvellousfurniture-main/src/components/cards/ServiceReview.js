import ProductCard from './ProductCard'
import styles from './servicereview.module.css'
import { NavLink } from 'react-router-dom'
import pic from '../../assets/services/static.png'
import pic2 from '../../assets/services/event.png'
import pic3 from '../../assets/services/vip.png'
import Title from '../title/Title'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ServiceReview = () => {
    const [servies, setservies] = useState([]);
  
  const scrollTop=()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const res = await axios.get('http://localhost:6969/service/all');
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
    <div className={styles.cont}>
          <Title mainTitle={'Our Service'} subTitle={"Create your own paradiset get inspired. See below"}/>
          <div className={styles.lists}>
            {servies.map((l)=><ProductCard key={l.id} {...l}/>)}
          </div>
          <div className={styles.moreservice}><NavLink to={'/service'} onClick={scrollTop}>More Service</NavLink></div>
        </div>
  )
}

export default ServiceReview