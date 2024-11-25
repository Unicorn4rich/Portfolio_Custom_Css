"use client"
import Image from "next/image"
import React, { useRef } from 'react'
import { interFont } from "@/font"
import styles from "./sCards.module.css"
import {s_Card_data} from "@/constant/servicesCard";
import {motion, useMotionValue, useTransform} from "framer-motion"


function S_Cards() {   // Is component se card utha kar hamne neechy aik new component mein rakha taky har aik card pe alag alag animation apply kar saken.
  return (
    <>

            {s_Card_data.map((item, index) =>{return (  // 1 yahn sab se pehly item aega

              <Card item={item} key={index}/>    // 3 uske bad yahm aega
 
            )})}

    </>
  )
}


// Card Component
function Card({item}:{item:{src: string, title: string, discription: string }}){  // 2 phir yahn

  const card_ref = useRef<HTMLDivElement | null>(null);   // yahn aik hamne useref bnaya 
  const mouse_Ex = useMotionValue(0);                     // or yahn hamne variable bnaye capMouse ki setting capture karne ke liye
  const mouse_Y = useMotionValue(0);

//                                         input arr    output arr => 2. dosry aaray ka matlab hai card ko 10px opar ya -10px aagy peechy rotate krwa do. 
  const rotate_Ex = useTransform(mouse_Y, [-50, 50], [5, -5]) // 1.input arr card ke center mein mouse ko rakh kar agr (-100) opar ya (100)px neechy mouse ko move karenge to hmara card move hoga agr is se zada karenge to nahi same hi rhega. 
  const rotate_Y = useTransform(mouse_Ex, [-50, 50], [-5, 5])

  const handleMouse_move = (e: React.MouseEvent)=>{        // for DOM manipulation ye aik event hai jab mouse ghomta hai to browser se uski locations yahn lar kar set variable mein karte hain.
    if(!card_ref.current) return                           // iske andar value nahi aai to yahi se return ho jaega
    const reac = card_ref.current.getBoundingClientRect()  // or agr value aa gai to ye code chal kar return hoga
    const x =  e.clientX - reac.left - reac.width / 2;     // broswer mouse ki movement se value laa kar iske andar set karega.
    const y =  e.clientY - reac.top - reac.height / 2;

    rotate_Ex.set(x)   // in varibale mein value set hoti hai
    rotate_Y.set(y)
  }


  const handle_onMouseLeave = ()=> {   // or jab ham mouse hata dety hain to wo variable ki value (0) krwa deta hai 
    rotate_Ex.set(0)
    rotate_Y.set(0)
  }


  return(
    <motion.div className={`${styles.card} ${interFont.className}}`}
    ref={card_ref}                                            // ye likhne is div ka pora control opar waly veriable useRef mein iska control chala jaega.
    style={{perspective: 600, rotateX: rotate_Ex, rotateY: rotate_Y }}
    onMouseMove={handleMouse_move}                          // mouse jab move karega to ye event chalega
    onMouseLeave={handle_onMouseLeave}
    >
                
    <div className={styles.card_image}> <Image src={item.src} alt={"picture"} width={60} height={60}/></div>

    <h1>{item.title}</h1>

    <p>{item.discription}</p>
    
    </motion.div>
  )
}



export default S_Cards