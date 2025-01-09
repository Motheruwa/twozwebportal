import React from 'react'
import styles from './testmonialcard.module.css'
import { FaStar } from 'react-icons/fa'
import { BsFillPersonFill } from "react-icons/bs";
const TestmonialCard = (data) => {
  const stars=[
    {id:1},
    {id:2},
    {id:3},
    {id:4},
    {id:5},
  ]
  return (
    <div className={styles.cont}>
        <div className={styles.top}>
            <div className={styles.imgbox}><BsFillPersonFill/></div>
            <div className={styles.namebox}>
                <span className={styles.stars}>
                  {stars.map((l)=><FaStar key={l.id} color={l.id > data.rate ? 'gray':'var(--fcolor)'}/>)}
                </span>
                <span>{data.name}</span>
                <span style={{fontSize:'12px'}}>{data.role}</span>
            </div>
        </div>
        <span className={styles.text}>{data.note}
        </span>
    </div>
  )
}

export default TestmonialCard