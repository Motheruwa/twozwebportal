import React, { useEffect, useState } from 'react'
import styles from "./topnavbar.module.css";
import { FaArrowUp } from 'react-icons/fa'

const GoTop = () => {
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 160;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTop=()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className={styles.gotop} style={{display:scrolled?'flex':'none',cursor:'pointer'}} onClick={scrollTop}><FaArrowUp/></div>
  )
}

export default GoTop