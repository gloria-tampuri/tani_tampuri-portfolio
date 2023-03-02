import React from 'react'
import Link from 'next/link'
import classes from './Header.module.css'
import Image from 'next/image'
import git from '/public/icons/github.svg'
import linkedIn from '/public/icons/linkedIn.svg'
import twitter from '/public/icons/twitter (2).svg'
import instagram from '/public/icons/instagram (2).svg'
import { motion } from 'framer-motion'


// Framer motion
const logoVariant = {
  hidden:{
    y: "-100px",
    opacity: 0
  },
  show:{
    y: 0,
    opacity: [-2,-1,0,1,2],
    transition:{
      duration: 0.3,
      type: "spring",
      damping: 10,
      // stiffness: 100
    }
  }
}
const Header = () => {

  return (
    <div className={classes.header} >
        <div className={classes.names}>
          <motion.h1 
          variants={logoVariant}
          initial="hidden"
          animate="show"
          className={classes.logo}>GTT</motion.h1>
          <h2 className={classes.name}>Gloria Tani Tampuri</h2>
        </div>
        <div className={classes.socials}>
        <Link href="https://github.com/gloria-tampuri">  <Image src={git} alt='github' width={25} height={25}/></Link>
         <Link  href='https://www.linkedin.com/in/gloria-tampuri-6ab397157'> <Image className={classes.social} src={linkedIn} alt='LinkedIn' width={25} height={25}/></Link>
          <Link  href='https://twitter.com/glow_tani'><Image className={classes.social} src={twitter} alt='twitter' width={25} height={25}/></Link>
         <Link  href="https://instagram.com/just_tani?igshid=YmMyMTA2M2Y="> <Image className={classes.social} src={instagram} alt='instagram' width={25} height={25}/></Link>
        </div>
    </div>
  )
}

export default Header