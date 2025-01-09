import React from 'react'
import styles from './loading.module.css'

const Loading = () => {
  return (
    <div className={styles.cont}>
        <span className={styles.loading}></span>
    </div>
  )
}

export default Loading