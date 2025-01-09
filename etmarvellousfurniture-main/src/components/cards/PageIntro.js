import React from 'react'
import styles from './pageintro.module.css'

const PageIntro = ({img,text}) => {
  return (
    <div className={styles.cont}>
        <img src={img} alt='intro' className={styles.imgbox}/>
        <span className={styles.content}>{text}</span>
    </div>
  )
}

export default PageIntro