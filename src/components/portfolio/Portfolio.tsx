import { caveatFont, interFont } from "@/font"
import styles from "./Portfolio.module.css"
import PortfolioCard from "@/components/portfolio/portfolio_cards/PortfolioCard"

import React from 'react'

function Portfolio() {
  return (
    <>
    
    <section className={styles.port_Sec} id="portfolio">

        <h1 className={`${caveatFont.className}`}>
        <span>M</span>y <span>L</span>ast <span>W</span>ork
        </h1>

        <p className={interFont.className}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt deserunt laudantium officia fuga ipsam quasi corrupti in <br/>
           numquam dolor libero explicabo, inventore aperiam, commodi et! Quia iste tempora aut, illum culpa ipsum possimus saepe <br/>
           eligendi.
        </p>


        <div className={styles.project_cards}>

           <PortfolioCard/>

        </div>

    </section>

    </>
  )
}

export default Portfolio