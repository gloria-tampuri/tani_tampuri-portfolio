import React from 'react'
import classes from './Tech.module.css'
import html from 'public/icons/html-5.svg'
import { v4 as uuidv4 } from 'uuid'
import Image from 'next/image'


const socialIcons = [
    {
        id: uuidv4(),
        name: 'Figma',
        picture: 'icons/figma.svg'
    },

    {
        id: uuidv4(),
        name: 'html',
        picture: 'icons/html-5.svg'
    },

    {
        id: uuidv4(),
        name: 'css',
        picture: 'icons/css-3.svg'
    },

    {
        id: uuidv4(),
        name: 'git',
        picture: 'icons/git.svg'
    },

    {
        id: uuidv4(),
        name: 'JavaScript',
        picture: 'icons/javascript.svg'
    },

    {
        id: uuidv4(),
        name: 'React',
        picture: 'icons/react-js.svg'
    },

    {
        id: uuidv4(),
        name: 'github',
        picture: 'icons/github.svg'
    },

    {
        id: uuidv4(),
        name: 'Nextjs',
        picture: 'icons/next-js.svg'
    },

    {
        id: uuidv4(),
        name: 'MongoDB',
        picture: 'icons/mongodb.svg'
    },

    {
        id: uuidv4(),
        name: 'Tailwind',
        picture: 'icons/tailwind.svg'
    }


]

console.log(socialIcons[0].id);


const Tech = () => {

    return (
        <div className={classes.tech}>
            <h1>What I use to work</h1>

            <div className={classes.techGrid}>
                {socialIcons.map(tech=><div className={classes.image}><Image src={tech.picture} alt='html' width={100} height={100} /></div>)}
            </div>
        </div>
    )
}

export default Tech