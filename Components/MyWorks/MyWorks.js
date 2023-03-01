import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import classes from './MYWorks.module.css'
import project1 from '/public/icons/project1.png'
import project2 from '/public/icons/project2.png'
import project3 from '/public/icons/project3.png'
import project4 from '/public/icons/project4.png'


const MyWorks = () => {
  return (
    <div className={classes.works}>
      <h1>What I have Built</h1>

      <div className={classes.allWorks}>
        <div className={classes.work}>
          <div className={classes.pic}>
            <Image src={project1} width={300} height={200} className={classes.image} />
          </div>
          <div className={classes.discription}>
            <h4>Gabnet Website</h4>
            <p>This is an ecommerce website for Gabnet.</p>
            <Link className={classes.link} href='https://www.gabnetprinting.com'>www.gabnetprinting.com</Link>
          </div>
        </div>

        <div className={classes.work}>
          <div className={classes.pic}>
            <Image src={project2} width={300} height={200} className={classes.image} />
          </div>

          <div className={classes.discription2}>
            <h4>Congas</h4> 
            <p> This is an online portal use to order for gas pickup and delivery </p>
            <Link className={classes.link} 
             href='https://www.congasgh.com'>www.congasgh.com</Link>
          </div>
        </div>

        <div className={classes.work}>
          <div className={classes.pic}>
            <Image src={project3} width={300} height={200} className={classes.image} />
          </div>

          <div className={classes.discription3}>
            <h4>Homewell Ventures</h4>
            <p>Business management system </p>
            <Link href='www.gabnetprinting.com'></Link>
          </div>
        </div>

        <div className={classes.work}>
          <div className={classes.pic}>
            <Image src={project4} width={300} height={200} className={classes.image} />
          </div>

          <div className={classes.discription4}>
            <h4>Green-Fields Staff Portal</h4>
            <p>Farm Record keeping management system</p>
            <Link href='www.gabnetprinting.com'></Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MyWorks