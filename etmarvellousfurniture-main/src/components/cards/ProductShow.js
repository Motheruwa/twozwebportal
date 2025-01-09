import React, { useEffect, useState } from "react";
import styles from "./productshow.module.css";
import whopic from "../../assets/awards/award.png";
import whatpic from "../../assets/imgs/whatmain.png";
import whypic from "../../assets/imgs/whymain.png";
import howpic from "../../assets/imgs/unique.png";

import { FaDotCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ProductShow = () => {
  const [isVisible, setIsVisible] = useState(false);

  const [selectedItem,setSelectedItem]=useState(1)

  // useEffect(() => {
  //   setIsVisible(true);
  // }, [selectedItem]);

  useEffect(() => {
    setIsVisible(false);
    const interval = setInterval(() => {
      setSelectedItem((prevItem) => (prevItem === minerals.length ? 1 : prevItem + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsVisible(true);
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [selectedItem]);

  const minerals = [
    {
      id: 1,
      name: 'Who We Are',
      img:whopic,
      description: "At Taste Byte, we're more than a service provider—we're your trusted partner in security, HR solutions, and cleaning services. With 14+ years of experience and a focus on excellence, we empower businesses and individuals with reliable, efficient, and innovative solutions. Built on values of integrity, professionalism, and customer focus, every interaction with us adds value to your operations.",
    },
    {
      id: 2,
      name: 'What we Do',
      img:whatpic,
      description: "We offer tailored solutions for safeguarding your property, managing your workforce, and maintaining spotless environments. Our services include: Security Services: Trained professionals ensuring safety. Human Resource Management: Recruitment, payroll, and compliance made easy. Cleaning Services: Thorough, reliable cleaning for commercial and residential spaces. With expertise and technology, we help you focus on achieving your goals.",
    },
    {
      id: 3,
      name: 'Why Us',
      img:whypic,
      description: "we deliver trust, quality, and results. Our client-first approach ensures personalized solutions, supported by certified professionals and innovative strategies, making us a reliable partner committed to your success.",
    },
    {
      id: 4,
      name: "How We're Different",
      img:howpic,
      description: "We prioritize your satisfaction with tailored services, proactive strategies, and consistent results. Whether it’s security, HR, or cleaning, we offer professional, efficient solutions that meet the highest standards, ensuring your peace of mind.",
    },
  ];

  return (
    <div className={styles.box}>
      <div className={styles.cont}>
      <div className={styles.slider}>
        <div className={styles.lines}>{minerals.map(l=><span key={l.id} style={{background:selectedItem >= l.id?'var(--fcolor)':'transparent'}} className={styles.line}></span>)}</div>
        <div className={styles.nums}>{minerals.map(l=><span key={l.id} style={{background:selectedItem===l.id?'var(--fcolor)':'transparent',color:selectedItem===l.id?'white':'var(--fcolor)'}} onClick={()=>setSelectedItem(l.id)} className={styles.rolnum}><FaDotCircle/></span>)}</div>
      </div>
      <div className={styles.contentbox}>
      <div className={styles.content}>
        <span className={isVisible ? styles.title:styles.hiddentitle}>{minerals.find((mineral) => mineral.id === selectedItem).name}</span>
        <span className={isVisible ? styles.description : styles.hiddendes}>{minerals.find((mineral) => mineral.id === selectedItem).description}</span>
      </div>
      <div className={styles.imgs}><img className={isVisible ? styles.showimg:styles.hideimg} src={minerals.find((mineral) => mineral.id === selectedItem).img} alt="mineral"/></div>
      </div>
    </div>
    </div>
  );
};

export default ProductShow;
