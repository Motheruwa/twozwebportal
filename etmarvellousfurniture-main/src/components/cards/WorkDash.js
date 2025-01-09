import React from 'react'
import styles from './workdash.module.css'
import { FaBuilding, FaClock, FaUsers, FaUserShield } from 'react-icons/fa'
import Title from '../title/Title'
import NumberCounter from '../helper/NumberCounter'
const WorkDash = () => {
    const Data=[
        {
            id:1,
            icon:<FaClock/>,
            num:15,
            desc:'Years Of Experience'
        },
        {
            id:2,
            icon:<FaBuilding/>,
            num:26,
            desc:'Our Partners'
        },
        {
            id:3,
            icon:<FaUserShield/>,
            num:7093,
            desc:'Our Employees'
        },
        {
            id:4,
            icon:<FaUsers/>,
            num:73,
            desc:'Our Staffs'
        },
    ]
  return (
    <div className={styles.cont}>
          <Title mainTitle={'OVERVIEWS'} subTitle={"Taste Byte in Numbers"}/>
        <div className={styles.list}>
        {Data.map((d,i)=><div key={i} className={styles.infobox}>
            <span className={styles.iconbox}>{d.icon}</span>
            <NumberCounter duration={3000} endValue={d.num}/>
            <span className={styles.desc}>{d.desc}</span>
        </div>)}
        </div>
    </div>
  )
}

export default WorkDash