"use client"
import styles from "./ContactUs.module.css"
import {caveatFont, interFont} from "@/font"
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import { sendEmail } from "@/utils/emailService";


function Conractus(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e: React.FormEvent) =>{
        e.preventDefault();  // stop submisson

        const templateParams = {
            to_name: "Shoaib Khan",
            from_name: name,
            from_email: email,
            message: message
        };

        try{
            await sendEmail(templateParams);
                alert("Email sent succesfully");
                setName('')
                setEmail('')
                setMessage('')
        }
        catch (error){
            console.error('EmailJs error', error);
            alert("Failed to send email")
        }
    }

    return(
        <>
        
        <section className={`${styles.Cantact_Us} ${interFont.className}`} id="contact">

            <h1 className={caveatFont.className}><span>C</span>ontact <span>M</span>e</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt deserunt laudantium officia fuga ipsam quasi corrupti in <br/>
            numquam dolor libero explicabo, inventore aperiam.</p>


            <div className={styles.Main_div}>

                <div className={styles.text_leftDiv}>

                    <div className={styles.for_flex}>
                        <MdEmail size={24} color={"var(--logo-color)"} />

                        <div className={styles.left_text}>
                            <h6>Have a question?</h6>
                            <h6>I am here to help you</h6>
                            <h6>Email me at sk9952908@gmail.com</h6>
                        </div>
                    </div>

                    <div className={styles.for_flex}>
                        <FaMapMarkerAlt  size={24} color={"var(--logo-color)"} />

                        <div className={styles.left_text}>
                            <h6>Current Location</h6>
                            <h6>Karachi, Pakistan</h6>
                            <h6>serving clients worldwide</h6>
                        </div>
                    </div>

                </div>



                <div className={styles.form_rightDiv}>
                    <form onSubmit={handleSubmit}>

                        <div className={styles.top_inputDiv}>
                            <input type="text" placeholder="Your name" className={styles.input_Details}   name="name" value={name} onChange={(e)=>setName(e.target.value)} />
                            <input type="text" placeholder="Your Email" className={styles.input_Details}  name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                        </div>

                        <input type="text" placeholder="subject" className={styles.input_Details} style={{width: "100%"}}/>

                        <textarea placeholder="Your message" className={styles.input_Details} style={{height: "224px"}} name="message" value={message} onChange={(e)=>setMessage(e.target.value)} ></textarea>

                        <input type="submit" value={"Send message"} className={styles.input_btn}/>
                    </form>
                </div>

            </div>

        </section>

        </>
    )
}

export default Conractus