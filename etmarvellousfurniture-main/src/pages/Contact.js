import React, { useEffect, useRef, useState } from "react";
import styles from "./contact.module.css";
import PageIntro from "../components/cards/PageIntro";
import zimg from '../assets/contact.jpg'
import {FaMailBulk, FaMapPin, FaPhoneAlt } from 'react-icons/fa'
import MapComponent from "../components/map/Map";
import Title from "../components/title/Title";
import Appointment from "./Apponitment";
const Contact = () => {
  useEffect(() => {
    document.title = ' Contact Us';
  }, []);

  const [msgSending,setMsgSending]=useState(false)
  const [msgErr,setMsgErr]=useState('')
  const [msgErrColor,setMsgErrColor]=useState('green')

  const formRef=useRef(null)

  const handelMsg=(e)=>{
    e.preventDefault();
    setMsgSending(true)
    setMsgErr('Your message has been sent. Thank you!')
    setMsgErrColor('green')
    formRef.current.reset()
  }
  return (
    <>
      <PageIntro  text={"Contact"} img={zimg}/>
      <div className={styles.cont}>
        <div className={styles.box}>
        <Title mainTitle={'Contact US'} subTitle={"You are always welcome to visit us and give us Feedbacks on our services."}/>
          <div className={styles.lists}>
            <div className={styles.locationbox}>
            <div className={styles.location}><span className={styles.icons}><FaMapPin/></span><div className={styles.infobox}><span>Location:</span><span>Yeka City, Semit, NY 535022</span></div></div>
            <div className={styles.location}><span className={styles.icons}><FaMailBulk/></span><div className={styles.infobox}><span>Email:</span><a href="mailto:info@Taste Bytesecurityservice.com" style={{color:'black',textDecoration:'none'}}>info@Taste Bytesecurityservice.com</a></div></div>
            <div className={styles.location}><span className={styles.icons}><FaPhoneAlt/></span><div className={styles.infobox}><span>Phone:</span><a href="tel:1234567" style={{color:'black',textDecoration:'none'}}>+251 9 12 71 68 68</a></div></div>
            <div className={styles.location}><span className={styles.icons}><FaPhoneAlt/></span><div className={styles.infobox}><span>Phone 2:</span><a href="tel:1234567" style={{color:'black',textDecoration:'none'}}>+251 9 12 71 68 68</a></div></div>
            </div>
            
            <form ref={formRef} onSubmit={handelMsg} className={styles.formbox}>
              <div className={styles.inputcont}><span>Your Name</span><input maxLength={20} required minLength={5} type="text"/></div>
              <div className={styles.inputcont}><span>Your Email</span><input required type="email"/></div>
              <div className={styles.inputcont}><span>Subject</span><input required maxLength={30} min={5} type="text"/></div>
              <div className={styles.inputcont}><span>Message</span><textarea required maxLength={200}></textarea></div>
              <div className={styles.formerr} style={{display:msgErr?"flex":'none',background:msgErrColor,color:'white'}}>{msgErr}</div>
              <div className={styles.btncont}>
              <button type="submit" disabled={msgSending} className={styles.sendbtn}>{msgSending?'Sending':'Send Message'}</button>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.map}>
                <MapComponent/>
              </div>
      </div>
      <Appointment/>
    </>
  );
};

export default Contact;
