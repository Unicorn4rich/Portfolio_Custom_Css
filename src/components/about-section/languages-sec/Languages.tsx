"use client"
import Image from "next/image"
import styles from "./Languages.module.css"
import {motion} from "framer-motion"


// Parent section
const Container_Verient = {
    hidden:{},  // pehly ki halat mein ye ghaib ho
    show:{      // or jab ye show ho to aisa ho
        transition: {
            staggerChildren: 0.2      // is container ke andar ki first image show hony ke bad dosri image 0.2 second mein show hogi

        }
    }
}


// Children
const item_Verient ={
    hidden:{opacity: 0, y: 20}, // pehly ki halat mein ye ghaib ho or ye apni position se 20% neechy ho jaye
    show:{     // or jab ye show ho to aisa ho
        opacity: 1, y: 0    // jab ye show ho to opacity dikhny lag jaye or (0)% yani iski jp jagah thi ye uspe aa jaye
    } 
}


function Languages(){
    return(
        <>

        <motion.section className={styles.languages_Sec}
        variants={Container_Verient} // ye parent wali property jo hamne opar tayyar ki hai
        initial="hidden"             // ye parent vearient ke andar moujod hidden wali property hai
        whileInView="show"           // jab hmari screen pe ye section show ho tab ye trasition hamen dikhni chahiye
        
        >
            <motion.div variants={item_Verient}><Image src={"/Images/html.png"} alt="html image" width={96} height={96} /></motion.div>  {/* image ko motion.div mein ham framer motion apply karne ke liye rakh rhy hain kiyun image direct nahi chalegi F mein */}
            <motion.div variants={item_Verient}><Image src={"/Images/css.png"} alt="html image" width={96} height={96} /></motion.div>
            <motion.div variants={item_Verient}><Image src={"/Images/typescript.png"} alt="html image" width={65} height={65} /></motion.div>
            <motion.div variants={item_Verient}><Image src={"/Images/git.png"} alt="html image" width={96} height={96} /></motion.div>
            <motion.div variants={item_Verient}><Image src={"/Images/figma.png"} alt="html image" width={96} height={96} /></motion.div>
            <motion.div variants={item_Verient}><Image src={"/Images/react.png"} alt="html image" width={96} height={96} /></motion.div>
            <motion.div variants={item_Verient}><Image src={"/Images/node.png"} alt="html image" width={96} height={96} /></motion.div>
            <motion.div variants={item_Verient}><Image src={"/Images/next.png"} alt="html image" width={96} height={96} /></motion.div>
        </motion.section>

        </>
    )
}

export default Languages