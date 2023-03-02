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
            <p>This is an ecommerce website for a shop that specialises in selling printing equipments. Here clients can search and know whats available at the shop and also make enquires</p>
            <Link className={classes.link} href='https://www.gabnetprinting.com'>www.gabnetprinting.com</Link>
          </div>
        </div>

        <div className={classes.work}>
          <div className={classes.pic}>
            <Image src={project2} width={300} height={200} className={classes.image} />
          </div>

          <div className={classes.discription2}>
            <h4>ConGas</h4> 
            <p> I collabrated with a team of developers to develope an online portal where clients can sit at the comfort of thier homes and ask for thier empty domestic gas to be picked up, refilled and delivered back to them.  </p>
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
            <p>Record keeping management system for a catfish farm which is used to keep inventory of all activities that go on in the farm. The system also manages records of sales and mortality of fishes</p>
            <Link href='www.gabnetprinting.com'></Link>
          </div>
        </div>

        <div className={classes.work}>
          <div className={classes.pic}>
            <Image src={project4} width={300} height={200} className={classes.image} />
          </div>

          <div className={classes.discription4}>
            <h4>Green-Fields Staff Portal</h4>
            <p>This is a business management system used by staff of the Green-Fields farm. Based on staff roles, staff are able to add, edit and delete what goes into the system. Here equipments purchased are input into the system and revenue they make. Also, crops sown and all activities surrounding them are input into the system.</p>
            <Link href='www.gabnetprinting.com'></Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MyWorks