import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './topnavbarcontact.module.css';
import logo from '../../assets/image.png';
import { FaBusinessTime, FaMapMarkedAlt } from 'react-icons/fa';

const TopNavBarContact = () => {

  const scrollTop = () => {
    window.scrollTo ({top: 0, behavior: 'instant'});
  };

  return (
    <div className={styles.cont}>
      <div className={styles.boxcont}>
        <NavLink className={styles.logobox} to="/" onClick={scrollTop}>
          <img className={styles.logo} src={logo} alt="logo" />
        </NavLink>
        <div className={styles.location}>
          <FaMapMarkedAlt size={50}/>
          <div>
            <span>Addis Ketema ,Abenem 8th Floor </span>
            <span>Addis Abeba, Ethiopia </span>
          </div>
        </div>
        <div className={styles.hours}>
          <FaBusinessTime size={50}/>
          <div>
            <span>Monday - Friday : 2:00 AM - 11: AM </span>
            <span>Saturday : 2:00 AM - 6:00 AM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavBarContact;
