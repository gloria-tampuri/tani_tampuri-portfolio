import React from 'react'
import classes from './FeedBacks.module.css'
import {VscStarFull} from 'react-icons/vsc'

const Feedbacks = () => {
  return (
    <div className={classes.feedbacks}>
      <h1>Client's Feedback</h1>

      <div className={classes.feeds}>

         <div className={classes.feed}>
         <div className={classes.text}>
            <p className={classes.quote}>"</p>
            <p>As a fullstack developer, statisfying clients and meeting deadlines can be hectic, so i reach out to the best talents to help meet deadlines. Tani is an amazing front-end dev, with solid understanding of front-end concepts. Her codes are clean and makes connecting them to my apis so simple</p>
            <div className={classes.stars}>
              <VscStarFull/>
              <VscStarFull/>
              <VscStarFull/>
              <VscStarFull/>
              <VscStarFull/>
            </div>
         </div>
           <div className={classes.person}>
           <div className={classes.img}></div>
            <p>Samuel Quiacoo</p>
            <p>Fullstack Dev (KBQ Tech World)</p>
           </div>
          </div>

        
          <div className={classes.feed}>
         <div className={classes.text}>
            <p className={classes.quote}>"</p>
            <p>I am a farmer with little knowledge in accounting and record keeping. Tani visited my catfish farm one day, saw my challenges and quickly came up with a solution. Within weeks she had developed a wonderful  web applicartion to help me keep records of all activities going on in my farm. Accountability is so much easy now. Thank you Tani!</p>
            <div className={classes.stars}> <VscStarFull/>
              <VscStarFull/>
              <VscStarFull/>
              <VscStarFull/>
              <VscStarFull/></div>
         </div>
           <div className={classes.person}>
           <div className={classes.img}></div>
            <p>Mr. Jakes </p>
            <p>Farmer (CEO Homewell Ventures)</p>
           </div>
          </div>

         
          <div className={classes.feed}>
         <div className={classes.text}>
            <p className={classes.quote}>"</p>
            <p>Due to covid and its restrictions, the number of visitors visiting my shop had decline trastically. Now  there was a need to meet clients at thier homes. In search for a developer to help me build an ecommerce site, I chanced on Tani and i must say i am completely blown away. Business is thriving now. Clients have access to items in my shop through my website</p>
            <div className={classes.stars}>
            <VscStarFull/>
              <VscStarFull/>
              <VscStarFull/>
              <VscStarFull/>
              <VscStarFull/>
               </div>
         </div>
           <div className={classes.person}>
           <div className={classes.img}></div>
            <p>Gabriel Kisseh</p>
            <p>Enterprenuer (Gabnet Printing)</p>
           </div>
          </div>

      </div>
    </div>
  )
}

export default Feedbacks