import React from "react";
import styles from "./productcard.module.css";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa'
import { Image } from "antd";
import { BACKENDURL } from '../helper/Urls';

const ProductCard = (data) => {

  const scrollTop=()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  return (
    <div className={styles.cont}>
      <div className={styles.imgbox}><Image className={styles.zimg} src={`${BACKENDURL}/uploads/new/${data.attachment}`} alt={data.name}/></div>
      <div className={styles.content}>
      <span className={styles.title}>{data.title}</span>
      <span className={styles.detail}>{data.description}</span>
      <div className={styles.morebtn}>
        <NavLink state={data} className={styles.button} onClick={scrollTop} to={`/service/${data.title}`}><FaArrowRight/></NavLink>
      </div>
      </div>
    </div>
  );
};

export default ProductCard;
