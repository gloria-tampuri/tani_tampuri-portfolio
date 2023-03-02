import React from 'react'
import classes from './Footer.module.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <div className={classes.footer}>
            <p>Gloria Tani Tampuri &copy; {currentYear}</p>
           
    </div>
  )
}

export default Footer