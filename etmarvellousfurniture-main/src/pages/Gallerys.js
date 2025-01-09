import React, { useEffect, useState } from 'react'
import styles from "./gallery.module.css";
import PageIntro from '../components/cards/PageIntro';
import zimg from '../assets/gallery.jpg'
import GalleryCard from '../components/cards/GalleryCard';
import pic from '../assets/pics/enat.png'
import pic2 from '../assets/pics/abay.png'
import pic3 from '../assets/pics/trainng.png'
import axios from 'axios';
import { BACKENDURL } from '../components/helper/Urls';

import Title from '../components/title/Title';
// import ModelShow from '../components/ModelShow';

const Gallerys = () => {

  useEffect(() => {
    document.title = ' Projects';
  }, []);
  const [galleryData, setgalleryData] = useState([]);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const res = await axios.get(`${BACKENDURL}/project/all`);
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
  

  const [filterType,setFilterType]=useState('')
  

  let filteredItems;
  if (filterType !== '') {
    filteredItems = galleryData.filter(item => item.type === filterType);
  } else {
    filteredItems = galleryData;
  }

  const types=Array.from(
    new Set(
      galleryData.map(project => project.type)  
    )
  )
  
  return (
    <>
      <PageIntro text={'Projects'} img={zimg}/>
      <div className={styles.cont}>
        <div className={styles.box}>
          <Title mainTitle={'Photos from our Experience and Products'} subTitle={''}/>
          <div className={styles.searchbox}>
            <span className={styles.searchlinks} onClick={()=>setFilterType('')} style={{background:filterType===''?'var(--fcolor)':'white',color:filterType===''?'white':'var(--fcolor)'}}>All</span>
            {types.map((l,k)=>
            <span className={styles.searchlinks} onClick={()=>setFilterType(l)} style={{background:filterType===l?'var(--fcolor)':'white',color:filterType===l?'white':'var(--fcolor)'}} key={k}>{l}</span>
            )}
          </div>
          <div className={styles.lists}>
          {
          filteredItems.map((l)=><GalleryCard key={l.id} {...l}/>)
          }
          </div>
        </div>
      </div>
    </>
  )
}

export default Gallerys