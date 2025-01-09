import React from 'react'
import styles from './gallerycard.module.css'
import { NavLink } from 'react-router-dom'
import { FaDownload, FaLink } from 'react-icons/fa'
import { BACKENDURL } from '../helper/Urls';

const GalleryCard = (data) => {
    const scrollTop=()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
  return (
    <div className={styles.cont}>
        <div className={styles.topbox}>
          <img src={`${BACKENDURL}/uploads/new/${data.attachment}`} alt='pic' className={styles.img}/>
          <div className={styles.info}>
            {/* <div className={styles.links}>
              <a href={data.link} target='_blank' rel='noreferrer'><FaLink className={styles.icons}/></a>
              <FaDownload className={styles.icons}/>
            </div> */}
            <span className={styles.type}>{data.type}</span>
          </div>
        </div>
        <div className={styles.name}><NavLink state={data} onClick={scrollTop} to={`/projects/${data.companyName}`}>{data.companyName}</NavLink></div>
    </div>
  )
}

export default GalleryCard