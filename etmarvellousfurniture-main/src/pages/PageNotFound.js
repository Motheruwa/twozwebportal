import { Button, Result } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom'
import {TbError404 } from 'react-icons/tb'
const PageNotFound = () => {
  return (
    <Result icon={<TbError404 size={200}/>} style={{width:'100vw',height:'70vh'}} title={<Button><NavLink to={'/'} onClick={()=>window.scrollTo({ top: 0, behavior:'instant' })}>Home Page</NavLink></Button>} />
  )
}

export default PageNotFound