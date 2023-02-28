import React from 'react'
import Link from 'next/link'
import classes from './Header.module.css'
import Image from 'next/image'
import git from '/public/icons/github.svg'
import linkedIn from '/public/icons/linkedIn.svg'
import twitter from '/public/icons/twitter (2).svg'
import instagram from '/public/icons/instagram (2).svg'

const Header = () => {
  return (
    <div className={classes.header} >
        <div className={classes.names}>
          <h1 className={classes.logo}>GTT</h1>
          <h2 className={classes.name}>Gloria Tani Tampuri</h2>
        </div>
        <div className={classes.socials}>
        <Link href={''}>  <Image src={git} alt='github' width={25} height={25}/></Link>
         <Link  href={''}> <Image className={classes.social} src={linkedIn} alt='LinkedIn' width={25} height={25}/></Link>
          <Link  href={''}><Image className={classes.social} src={twitter} alt='twitter' width={25} height={25}/></Link>
         <Link  href={''}> <Image className={classes.social} src={instagram} alt='instagram' width={25} height={25}/></Link>
        </div>
    </div>
  )
}

export default Header