import styles from "./Testmonial.module.css"
import React from 'react'
import Image from "next/image"
import {interFont} from "@/font"
import {Testi_Card_data} from "@/constant/testimonialCrad"

function Testmonial() {
  return (
    <>

        {Testi_Card_data.map((item, index) =>{return(
    
        <div className={`${styles.card} ${interFont.className}`} key={index}>

            <div className={styles.card_img}>
                <Image src={item.src} alt={"picture"} width={150} height={150} />
            </div>

             <p>{item.name}</p>

             <p><span>{item.title}</span></p>

             <p style={{marginBottom: "0px"}}>{item.description}</p>

        </div>

         )})}

    </>
  )
}

export default Testmonial