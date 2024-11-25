"use client"
import { caveatFont, interFont } from "@/font"
import styles from "./About.module.css"
import Button from "../button/Button"
import Image from "next/image"
import {motion} from "framer-motion"


function About(){
    return(
        <>
        
        <section className={styles.about_sec}>


            <motion.div className={styles.about_lefti} 
            initial={{opacity: 0, x: -100}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 2, type: "spring"}}
            >

                <h1 className={caveatFont.className}>Shoaib Khan</h1>

                <h3 className={caveatFont.className}>Freelance Web Developer</h3>

                <p className={interFont.className}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore,
                   dolorum odio magni possimus corrupti molestiae labore voluptatum
                   ut autem deleniti facilis tempora commodi dolores debitis repellendus
                   excepturi nisi? Quisquam suscipit iste facere molestiae saepe voluptates.
                </p>

                <Button text={"Contact Me"} />

            </motion.div>



            <motion.div className={styles.rightDiv}
            initial={{opacity: 0, x: 100}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 2, type: "spring"}}
            >
                <Image src={"/Images/profile.png"} alt="Profile picture" width={350} height={400} className={styles.img}/>
            </motion.div>

        </section>

        </>
    )
}

export default About