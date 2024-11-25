"use client"
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import Image from "next/image"
import { interFont } from "@/font"
import styles from "./HeroSection.module.css"
import {motion} from "framer-motion"
import { Typewriter } from 'react-simple-typewriter'


import React from 'react'
import Button from "../button/Button"

function HeroSection() {
  return (
    <>
    
    <section className={`${styles.hero_sec} ${interFont.className}`}>

        <h1>Hey! I'm {" "} <span>Shoaib Khan</span>
  {" "} <motion.span style={{fontSize: "50px", display: "inline-block", }}
        animate={{rotate: [0, 15, -10, 20, -10, 0]}}
        transition={{duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        
        >🖐</motion.span>

        <br/>
        <span>I</span>&apos; 'm

        <Typewriter words={[' A Front End Web Developer', ' Ux Ui Designer']} 
        loop={Infinity}
        cursor={true}
        cursorStyle={"_"}
        typeSpeed={80}
        deleteSpeed={50}
        delaySpeed={1500}  />
        
         </h1>


        <p>I can build user interface for web sites and applications with <span>React JS</span> and <span>Next.Js</span> <br/>
        I love the front end development.</p>

        <Button text={"Hire me"}/> <br/>

        <div className={styles.my_icons}>
        <FaFacebookF size={30} color="black" />
        <FaXTwitter size={30} color="black" />
        <FaInstagram size={30} color="black" />
        <FaWhatsapp size={30} color="black" />
        <FaTelegramPlane size={30} color="black" />
        </div>

        <div className={styles.bottom_logoDiv}>
            <Image src={"/images/behance.png"} alt="behance" width={156} height={46.38} />
            <Image src={"/images/dribble.png"} alt="behance" width={156} height={46.38} />
            <Image src={"/images/upwork.png"} alt="behance" width={156} height={46.38} />
            <Image src={"/images/freelance.png"} alt="behance" width={156} height={46.38} />
        </div>
        

    </section>

    </>
  )
}

export default HeroSection