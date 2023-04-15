import React from 'react'
import classes from './Services.module.css'

const Services = () => {
  return (
    <div className={classes.Services}>
        <h1>My Services Include</h1>
        <div className={classes.group}>
            <div className={classes.service}>
                <div className={classes.circle}></div>
                <h3>UI/UX</h3>
                <p>Collaboration with stakeholders to gather requirements from users before designing user friendly, functionable ideas that can be communicated using Figma.</p>
            </div>

            <div className={classes.service}>
                <div className={classes.circle}></div>
                <h3>Web Design</h3>
                <p>As technology evolves, there is a need for business to have online presence and I am here to assist. I design catchy websites which are interactive and optimized for every screen size</p>
            </div>

            <div className={classes.service}>
                <div className={classes.circle}></div>
                <h3>Web Application Software</h3>
                <p>As businesses seek to make thier work and life easy, I collaborate with businesses to find solutions to thier everyday problems using web technologies.</p>
            </div>

        </div>
    </div>
  )
}

export default Services