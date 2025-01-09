import React, { useEffect, useState } from 'react'
import styles from './galleryreview.module.css'
import { NavLink } from 'react-router-dom'
import GalleryCard from './GalleryCard'
import pic from '../../assets/pics/enat.png'
import pic2 from '../../assets/pics/abay.png'
import pic3 from '../../assets/pics/trainng.png'
import Title from '../title/Title'
import axios from 'axios';

const GalleryReview = () => {
  const scrollTop=()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  const [galleryData, setgalleryData] = useState([]);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const res = await axios.get('http://localhost:6969/project/all');
        setgalleryData(res.data.all);
      } catch (error) {
        console.error('Error fetching slide data:', error);
      }
    };

    fetchProjectData();

    // Clean-up function
    return () => {
      // Any clean-up code can go here
    };
  }, []);

  return (
    <div className={styles.cont}>
          <Title mainTitle={'Recent Projects'} subTitle={"Photos from our Experience"}/>
          <div className={styles.lists}>
            {galleryData.map((l)=><GalleryCard key={l.id} {...l}/>)}
          </div>
          <div className={styles.moreservice}><NavLink to={'/projects'} onClick={scrollTop}>More Projects</NavLink></div>
        </div>
  )
}

export default GalleryReview