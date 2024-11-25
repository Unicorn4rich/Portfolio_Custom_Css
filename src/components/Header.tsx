"use client"
import styles from "./Header.module.css"
import { caveatFont, interFont } from '@/font'
import Link from 'next/link'
import React from "react";
import { TiThMenu } from "react-icons/ti";
import { FaRegWindowClose } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";


function Header() {

 let [Open, setOpen] = React.useState(false);

  return (
    <>

    <header className={styles.header}>

        <nav className={styles.nav}>
            <h1 className={caveatFont.className}>Shoaib Khan</h1>

<AnimatePresence> {/* is tag ko hamne isliye lgaya jab ye menu band ho to transition mein slowly band ho */}

          {Open == true ? (   // Open true hoga to ye code chalega
            <motion.ul className={`${interFont.className} ${styles.navUl}  ${styles.active}`}
             initial={{opacity: 0, width: 0}}             
             animate={{opacity: 1, width: "40%"}}          
             transition={{duration: 0.2, type: "spring"}}  
             exit={{opacity: 0, width: 0}}                 
             key={"active"}                               
            >

            <FaRegWindowClose size={30} className={styles.closing}  onClick={()=>{setOpen(!Open)}} />   {/* closing icon */}
             <li><Link href={"#!"}>Home</Link></li>
             <li><Link href={"#!"}>About</Link></li>
             <li><Link href={"#!"}>Portfolio</Link></li>
             <li><Link href={"#!"}>Services</Link></li>
             <li><Link href={"#!"}>Testimonials</Link></li>
             <li><Link href={"#!"}>Contact</Link></li>

           </motion.ul>
          ) 
          : 
          (    // Open false hoga to ye code chalega
            <ul className={`${interFont.className} ${styles.navUl}`}>
              <li><Link href={"#!"}>Home</Link></li>
              <li><Link href={"#!"}>About</Link></li>
              <li><Link href={"#!"}>Portfolio</Link></li>
              <li><Link href={"#!"}>Services</Link></li>
              <li><Link href={"#!"}>Testimonials</Link></li>
              <li><Link href={"#!"}>Contact</Link></li>
            </ul>
          )}

</AnimatePresence>          

            <TiThMenu size={30} className={styles.menu}  onClick={()=>{setOpen(!Open)}} />

        </nav>

    </header>
    
    </>
  )
}

export default Header


/* Notes 

{ Open == true ? () : () }


<motion.ul></motion.ul>

animate={{opacity: 1, width: "40%"}}           animation ke waqt 
initial={{opacity: 0, width: 0}}               animation start se pehly 
exit={{opacity: 0, width: 0}}                  animation band hoty waqt 
transition={{duration: 0.2, type: "spring"}}   animation kitni der tak ho or kis style mein 
key={"active"}                                 animation band hoty waqt slowly band ho iski wajah se 
  
<AnimatePresence> ... </AnimatePresence>          for closing


global.css

html, body{
    color: white;
    overflow-x: hidden;
}

ye responsive karte waqt side se jo white screen ka space sho hota hai usy khatam kar deta hai




*/