import React from 'react'
import styles from './staff.module.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import profilepic from '../../assets/awards/award.png'
import { NavLink } from 'react-router-dom'
const StaffCard = (l) => {
  return (
    <div className={styles.cont}>
        <img className={styles.imgbox} src={profilepic} alt='profile'/>
        <div className={styles.info}>
            <span className={styles.name}>{l.name}</span>
            <span className={styles.role}>{l.role}</span>
            <span className={styles.desc}>{l.desc}</span>
            <div className={styles.links}>
              {l.facebook!==''&&<NavLink style={{color:'rgb(0,0,0,.8)'}} to={l.facebook}><FaFacebook  className={styles.icons}/></NavLink>}
              {l.linkedin!==''&&<NavLink style={{color:'rgb(0,0,0,.8)'}} to={l.linkedin}><FaLinkedin  className={styles.icons}/></NavLink>}
              {l.twitter!==''&&<NavLink style={{color:'rgb(0,0,0,.8)'}} to={l.twitter}><FaTwitter  className={styles.icons}/></NavLink>}
              {l.instagram!==''&&<NavLink style={{color:'rgb(0,0,0,.8)'}} to={l.instagram}><FaInstagram  className={styles.icons}/></NavLink>}
            </div>
        </div>
    </div>
  )
}

export default StaffCard