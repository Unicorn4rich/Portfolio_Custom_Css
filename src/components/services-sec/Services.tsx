import styles from "./Services.module.css"
import {caveatFont, interFont} from "@/font"
import S_Cards from "@/components/services-sec/s-cards/sCards"




function Services(){
    return(
        <>
        <section className={styles.Services} id="service">

            <h1 className={caveatFont.className}>
                <span>W</span>hat <span>I</span> <span>D</span>o <span>F</span>or <span>C</span>lients
            </h1>

            <p className={interFont.className}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt deserunt laudantium officia fuga ipsam quasi corrupti in<br/>
            numquam dolor libero explicabo, inventore aperiam, commodi et!</p>


            <div className={styles.ServicesCards_div}>

              <S_Cards/>

            </div>


        </section>
        </>
    )
}

export default Services