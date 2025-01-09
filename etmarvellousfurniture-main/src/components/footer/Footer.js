import React from 'react'
import styles from './footer.module.css'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/image.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram, FaTiktok } from 'react-icons/fa'

const Footer = () => {
    const companylinks=[
        {id:1,href:'/awards',name:'Awards'},
        {id:3,href:'/service',name:'Service'},
        {id:2,href:'/projects',name:'Projects'},
        {id:4,href:'/about',name:'About'},
    ]

    const legallinks=[
        {id:1,href:'/privacy',name:'Privacy Policy'},
        {id:2,href:'/terms',name:'Terms & Conditions'},
    ]

    const links=[
        {id:1,href:'/news',name:'Pricing'},
        {id:1,href:'/news',name:'News'},
        {id:2,href:'/faq',name:'FAQ'},
        {id:3,href:'/contact',name:'Contact Us'},
        {id:4,href:'/appointment',name:'Appointment'},
        {id:4,href:'/appointment',name:'Doc'},
    ]

    const worklinks=[
        {id:1,href:'/tender',name:'Sign in'},
        {id:1,href:'/tender',name:'Tender'},
        {id:2,href:'/vacancy',name:'Vacancy'},
    ]


    const scrollTop=()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

  return (
    <div className={styles.cont}>
        <div className={styles.box}>
            <div className={styles.logobox}>
            <NavLink to={'/'} onClick={scrollTop} className={styles.logo}>
                <img src={logo} alt='logo'/>
            </NavLink>
            <div style={{display:'flex',justifyContent:'space-between',gap:'30px',flexWrap:'wrap'}}>
            <div className={styles.links}><span style={{fontSize:'20px',fontWeight:'bold',marginBottom:'5px'}}>Company</span>{companylinks.map(l=><NavLink onClick={scrollTop} key={l.id} to={l.href}>{l.name}</NavLink>)}</div>
            <div className={styles.links}><span style={{fontSize:'20px',fontWeight:'bold',marginBottom:'5px'}}>Quick Links</span>{links.map(l=><NavLink onClick={scrollTop} key={l.id} to={l.href}>{l.name}</NavLink>)}</div>
            <div className={styles.links}><span style={{fontSize:'20px',fontWeight:'bold',marginBottom:'5px'}}>Work With Us</span>{worklinks.map(l=><NavLink onClick={scrollTop} key={l.id} to={l.href}>{l.name}</NavLink>)}</div>
            <div className={styles.links}><span style={{fontSize:'20px',fontWeight:'bold',marginBottom:'5px'}}>Legal</span>{legallinks.map(l=><NavLink onClick={scrollTop} key={l.id} to={l.href}>{l.name}</NavLink>)}</div>
            </div>

            
            </div>
            <div className={styles.content}>
                <div className={styles.copyright}>&copy; {new Date().getFullYear()} Taste Byte. </div>
                <div className={styles.social}>
                <a href="https://www.facebook.com"><FaFacebook/></a>
                <a href="https://www.facebook.com"><FaInstagram/></a>
                <a href="https://www.facebook.com"><FaTelegram/></a>
                <a href="https://www.facebook.com"><FaTiktok/></a>
                <a href="https://www.facebook.com"><FaLinkedin/></a>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer