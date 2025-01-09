import React from 'react'
import styles from './staffreview.module.css'
import StaffCard from './StaffCard'
const StaffReview = () => {
  const staffData=[
    {
      id:1,
      name:'John Doe',
      role:'Chief Executive Officer(CEO)',
      desc:'ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi liem, ipsa aspernatur architecto corporis odio!',
      facebook:'https://www.facebook.com',
      linkedin:'',
      twitter:'https://www.facebook.com',
      instagram:'https://www.facebook.com',
    },
    {
      id:2,
      name:'John Doe',
      role:'Assiastant',
      desc:'ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi liem, ipsa aspernatur architecto corporis odio!',
      facebook:'https://www.facebook.com',
      linkedin:'https://www.facebook.com',
      twitter:'https://www.facebook.com',
      instagram:'',
    },
    {
      id:3,
      name:'John Doe',
      role:'Sales',
      desc:'ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi liem, ipsa aspernatur architecto corporis odio!',
      facebook:'',
      linkedin:'',
      twitter:'https://www.facebook.com',
      instagram:'https://www.facebook.com',
    },
    {
      id:5,
      name:'Person four',
      role:'Marketing Officer',
      desc:'ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi liem, ipsa aspernatur architecto corporis odio!',
      facebook:'https://www.facebook.com',
      linkedin:'',
      twitter:'https://www.facebook.com',
      instagram:'https://www.facebook.com',
    },
    {
      id:5,
      name:'person five',
      role:'Video Production',
      desc:'ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi liem, ipsa aspernatur architecto corporis odio!',
      facebook:'https://www.facebook.com',
      linkedin:'https://www.facebook.com',
      twitter:'https://www.facebook.com',
      instagram:'https://www.facebook.com',
    },
  ]
  return (
    <div className={styles.cont}>
        <div className={styles.box}>
            {staffData.map((l)=><StaffCard key={l.id} {...l}/>)}
        </div>
    </div>
  )
}

export default StaffReview