import React from 'react'
import classes from './Footer.module.css'
import Link from 'next/link'

const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <div className={classes.footer}>
            <p>Gloria Tani Tampuri &copy; {currentYear}</p>
           <p> <Link className={classes.link}  href='mailto:gloriatampuri15@gmail.com'>      gloriatampuri15@gmail.com</Link></p>
  <p>
  <Link className={classes.link} href='tel:+233209102541'>+233 20 910 2541</Link>
    </p>           
    </div>
  )
}

export default Footer