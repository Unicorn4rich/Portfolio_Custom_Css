"use client"
import React from 'react'
import styles from "./Testimonials.module.css"
import {caveatFont, interFont} from "@/font"
import useEmblaCarousel from 'embla-carousel-react'
import Testmonial from "@/components/testimonials-sec/testimonial-card/Testmonial"
import Autoplay from 'embla-carousel-autoplay'

function Testimonials() {

    const [emblaRef] = useEmblaCarousel({ loop: true}, [Autoplay({delay: 3000})] )      

  return (
    <>
    
    <section className={styles.Testimono_Sec}>

        <h1 className={caveatFont.className}>
            <span>W</span>hat <span>O</span>ther <span>P</span>eople <span>S</span>ay
        </h1>


        <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>

            <Testmonial/>

        </div>
        </div>


    </section>
    
    </>
  )
}

export default Testimonials