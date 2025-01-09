import React, { useEffect, useRef, useState } from "react";
import styles from "./apponitment.module.css";
import zimg from "../assets/contact.jpg";
import PageIntro from "../components/cards/PageIntro";
import Title from "../components/title/Title";

const Appointment = () => {
  useEffect(() => {
    document.title = ' Appointment';
  }, []);

  const [appSending,setappSending]=useState(false)
  const [appErr,setappErr]=useState('')
  const [appErrColor,setappErrColor]=useState('green')

  const formRef=useRef(null)

  const handelapp=(e)=>{
    e.preventDefault();
    setappSending(true)
    setappErr('Your message has been sent. Thank you!')
    setappErrColor('green')
    formRef.current.reset()
  }
  return (
    
    <>
    <PageIntro text={"APPOINTMENT"} img={zimg} />
      <div className={styles.cont}>
        <div className={styles.box}>
          <Title mainTitle={'MAKE APPOINTMENT WITH US'} subTitle={""}/>
            <form ref={formRef} onSubmit={handelapp} className={styles.formbox}>
              <div className={styles.inputcont}><span>Full Name</span><input maxLength={20} required minLength={5} type="text"/></div>
              <div className={styles.inputcont}><span>Email Address</span><input required type="email"/></div>
              <div className={styles.inputcont}><span>Phone Number</span><input required type="tel"/></div>
              <div className={styles.inputcont}><span>Subject</span><input required maxLength={30} type="text"/></div>
              <div className={styles.inputcont}><span>Schedule</span><input required type="date"/></div>
              <div className={styles.inputcont}><span>Duration (in minutes)</span><input required type="number"/></div>
              <div className={styles.inputcont}><span>Additional Information</span><textarea required maxLength={200}></textarea></div>
              <div className={styles.formerr} style={{display:appErr?"flex":'none',background:appErrColor,color:'white'}}>{appErr}</div>
              <div className={styles.btncont}>
              <button type="submit" disabled={appSending} className={styles.sendbtn}>{appSending?'Sending':'Make Appointment'}</button>
              </div>
            </form>
          </div>
        </div>
        </>
  );
};

export default Appointment;
