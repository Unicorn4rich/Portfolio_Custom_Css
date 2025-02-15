"use client"
import Image from "next/image"
import styles from "./PortfolioCard.module.css"
import {poerfolioCard} from "@/constant/portfolioCard"
import React from 'react'
import Link from "next/link"
import {motion} from "framer-motion"



function PortfolioCard() {
  return (
    <>

     {poerfolioCard.map((item) =>{return(

        <motion.div className={styles.card} key={item.id}
        initial={{opacity: 0, scale: 0}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{duration:1}}
        >

<Link href={item.href}>
                <div className={styles.card_image}>

                    {item.type == "image" ? (
                        <Image src={item.src} alt="profile" width={407} height={407} className={styles.img} /> 
                    ) : (
                        <video src={item.src} controls  loop muted ></video> 
                    )}

                </div>
</Link>    

                <div className={styles.card_text}>{item.title}</div>

        </motion.div>

     )})}
    
    </>
  )
}

export default PortfolioCard