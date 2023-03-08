import React from 'react'
import classes from './Hero.module.css'
import gloria from '/public/icons/profile-photo-2.png'
import Typewriter from 'typewriter-effect'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className={classes.Hero}>

            <div className={classes.placement}>
                <div className={classes.image}>
                    <Image className={classes.img} src={gloria} alt='gloria' width={200} height={200} priority/>
                </div>
                <div className={classes.brief}>
                    <h1>Hi, I am <span className={classes.tani}>
                        <Typewriter className={classes.type} options={{
                            strings: ['Tani', 'Tampuri.'],
                            autoStart: true,
                            loop: true
                        }} />
                    </span></h1>
                    <p>A Frontend developer with a passion for solving problems by creating immersive user experience on software and websites which are optimized for any device. I have a strong eye for innovative design and an in-depth understanding of techniques geared towards optimum user experience. I am constantly learning to keep up with the ever evolving tech community.</p>
                </div></div>

        </div>
    )
}

export default Hero