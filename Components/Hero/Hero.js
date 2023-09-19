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
                    <Image className={classes.img} src={gloria} alt='gloria' width={500} height={500} priority/>
                </div>
                <div className={classes.brief}>
                    <h1>Hi, I am <span className={classes.tani}>
                        <Typewriter className={classes.type} options={{
                            strings: ['Tani', 'Tampuri.'],
                            autoStart: true,
                            loop: true
                        }} />
                    </span></h1>
                    <p>I'm a Frontend developer driven by a passion for problem-solving, striving to craft captivating user experiences on software and websites that seamlessly adapt to any device. My work is marked by a keen eye for innovative design and a profound grasp of techniques aimed at delivering the utmost in user satisfaction. In the dynamic landscape of technology, I maintain a commitment to continuous learning, ensuring that I remain in step with the ever-evolving tech community.</p>
                </div></div>

        </div>
    )
}

export default Hero