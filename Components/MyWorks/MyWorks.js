import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import classes from './MYWorks.module.css'
import project1 from '/public/icons/project1.png'
import project2 from '/public/icons/project2.png'
import project3 from '/public/icons/project3.png'
import project4 from '/public/icons/project4.png'
import project5 from '/public/icons/Screenshot (31).png'
import project6 from '/public/icons/Screenshot (32).png'

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
            <p>Welcome to our specialized eCommerce platform, dedicated to offering a wide range of high-quality printing equipment. Our website empowers clients to effortlessly browse our extensive inventory, explore product availability, and make inquiries with ease. Whether you're seeking specific printing solutions or simply want to stay informed about our offerings, our user-friendly interface is designed to cater to your needs.</p>
            <Link className={classes.link} href='https://www.gabnetprinting.com'>www.gabnetprinting.com</Link>
          </div>
        </div>

        <div className={classes.work}>
          <div className={classes.pic}>
            <Image src={project2} width={300} height={200} className={classes.image} />
          </div>

          <div className={classes.discription2}>
            <h4>ConGas</h4> 
            <p>I collaborated with a team of skilled developers to create an online portal that revolutionizes the way clients manage their domestic gas needs. From the convenience of their homes, customers can now request the pickup of their empty gas cylinders, have them expertly refilled, and then delivered back to their doorstep, providing a seamless and user-friendly solution to their gas-related requirements.  </p>
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
            <p>Introducing our advanced record-keeping management system specifically tailored for the efficient operations of a catfish farm. This system serves as a meticulous inventory management tool, meticulously tracking and documenting all farm activities.
Moreover, it provides a streamlined record-keeping solution for managing fish sales and monitoring fish mortality rates, ensuring that critical data is effortlessly maintained for the optimal functioning of the catfish farm.</p>
            <Link href='www.gabnetprinting.com'></Link>
          </div>
        </div>

        <div className={classes.work}>
          <div className={classes.pic}>
            <Image src={project4} width={300} height={200} className={classes.image} />
          </div>

          <div className={classes.discription4}>
            <h4>Green-Fields Staff Portal</h4>
            <p>Introducing our robust business management system, exclusively designed for the dedicated staff of Green-Fields Farm. Tailored to individual staff roles, this system grants the ability to seamlessly add, modify, or remove essential data within the framework.
Within this system, users can effortlessly record the procurement of equipment and track the revenue generated from these assets. Additionally, all aspects of crop cultivation and related activities find their place within the system, ensuring comprehensive and efficient management of the farm's operations.</p>
            <Link href='www.gabnetprinting.com'></Link>
          </div>


        </div>

        <div className={classes.work}>
          <div className={classes.pic}>
            <Image src={project5} width={300} height={200} className={classes.image} />
          </div>

          <div className={classes.discription5}>
            <h4>BMI Calculator</h4>
            <p>Welcome to our website dedicated to promoting and supporting healthy weight management in individuals. Here, users can easily input their weight and height to calculate their Body Mass Index (BMI), a crucial indicator of overall health. We provide personalized recommendations for healthy weight ranges based on users' height, empowering them to make informed decisions about their well-being. Our responsive design ensures a seamless experience on screens of all sizes, making it accessible to everyone.</p>
            <Link className={classes.link} href='https://bmi-calculator-nine-sigma.vercel.app/'>https://bmi-calculator-nine-sigma.vercel.app/</Link>
          </div>


        </div>

        <div className={classes.work}>
          <div className={classes.pic}>
            <Image src={project6} width={300} height={200} className={classes.image} />
          </div>

          <div className={classes.discription6}>
            <h4>EightBall Amusement Bussiness Management System</h4>
            <p>This is a comprehensive business management platform designed to store and organize essential information. It offers detailed statistical insights into the business's performance over specific time periods, enabling users to track and analyze key metrics. Additionally, it provides an asset ranking based on income generation, offering a clear overview of the most valuable resources.</p>
            <Link className={classes.link} href='https://bmi-calculator-nine-sigma.vercel.app/'></Link>
          </div>


        </div>

      </div>
    </div>
  )
}

export default MyWorks