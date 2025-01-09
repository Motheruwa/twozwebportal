import React from 'react'
import styles from './title.module.css'
const Title = ({mainTitle,subTitle}) => {
  return (
    <div className={styles.titlebox}>
            <span className={styles.title}>{mainTitle}</span>
            <div className={styles.titleline}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span className={styles.subtitle}>{subTitle}</span>
          </div>
  )
}

export default Title