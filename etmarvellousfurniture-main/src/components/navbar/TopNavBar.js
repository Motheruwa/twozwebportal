import React, { useEffect, useState } from "react";
import { NavLink,useLocation  } from "react-router-dom";
import styles from "./topnavbar.module.css";
import logo from '../../assets/image.png'
import { RiMenu4Line } from "react-icons/ri";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";

const TopNavBar = () => {

  const Links=[
    {id:1,href:'/',name:'Home'},
    {id:2,href:'/about',name:'About Us'},
    {id:3,href:'/service',name:'Service'},
    {id:4,href:'/awards',name:'Awards'},
    {id:5,href:'/news',name:'News'},
    {id:7,href:'/vacancy',name:'Vacancy'},
  ]

  const Links2=[
    {id:1,href:'/',name:'Home'},
    {id:2,href:'/about',name:'About Us'},
    {id:3,href:'/service',name:'Service'},
    {id:4,href:'/awards',name:'Awards'},
    {id:5,href:'/news',name:'News'},
    {id:7,href:'/vacancy',name:'Vacancy'},
    {id:8,href:'/contact',name:'Contact'},
  ]

  const [showMenu,setShowMenu]=useState(false)
  const location =useLocation()

  const scrollTop=()=>{
    window.scrollTo({ top: 0, behavior:'instant' });
  }

  const [scrollingUp, setScrollingUp] = useState(false);
  
  useEffect(() => {
    let lastScrollY = window.scrollY;
  
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
  
      if (currentScrollY > lastScrollY || (currentScrollY < 100)) {
        setScrollingUp(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setScrollingUp(true);
      }
  
      lastScrollY = currentScrollY;
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  return (
    <div className={styles.cont} style={{position:scrollingUp?'fixed':'initial',top:0,left:0,zIndex:100}}>
      <div className={styles.navbox}>
        <div className={styles.linkbox}>
          {Links.map((link=><NavLink onClick={()=>scrollTop()} style={{
            color:location.pathname===link.href || ((location.pathname.startsWith(`/service`) && location.pathname.startsWith('/service')===link.href.startsWith('/service'))||(location.pathname.startsWith(`/projects`) && location.pathname.startsWith('/projects')===link.href.startsWith('/projects')))?'var(--fcolora)':'white',
            background:location.pathname===link.href || ((location.pathname.startsWith(`/service`) && location.pathname.startsWith('/service')===link.href.startsWith('/service'))||(location.pathname.startsWith(`/projects`) && location.pathname.startsWith('/projects')===link.href.startsWith('/projects')))?'white':'var(--fcolora)',padding:'3px 20px',borderRadius:'3px'
            }} key={link.id} to={link.href}>{link.name}</NavLink>))}
          <NavLink onClick={()=>scrollTop()} style={{background:location.pathname==='/contact'?'white':'var(--fcolora)',color:location.pathname==='/contact'?'var(--fcolor)':'white',gap:'10px'}} className={styles.alinks} to={'/contact'}>Get Started<FaPhoneAlt className={styles.callbtn}/></NavLink>
        </div>
        <div className={styles.menulinkbox} style={{top:showMenu?'0':'-120%'}}>
            <div className={styles.closemenu} onClick={()=>setShowMenu(false)}><AiFillCloseCircle size={30}/></div>
          {Links2.map((link=><NavLink onClick={()=>{setShowMenu(false);scrollTop()}} style={{color:location.pathname===link.href?'var(--fcolor)':'rgba(0,0,0,.7)'}} key={link.id} to={link.href}>{link.name}</NavLink>))}
        </div>
        <div className={styles.menubox} onClick={()=>setShowMenu(true)}><RiMenu4Line size={25}/></div>
      </div>
    </div>
  );
};

export default TopNavBar;
