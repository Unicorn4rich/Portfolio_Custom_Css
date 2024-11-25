import Header from "@/components/Header";
import HeroSection from "@/components/hero-section/HeroSection";
import About from "@/components/about-section/About"
import Languages from "@/components/about-section/languages-sec/Languages"
import Portfolio from "@/components/portfolio/Portfolio";
import Services from "@/components/services-sec/Services"
import Testimonials from "@/components/testimonials-sec/Testimonials"
import Conractus from "@/components/contact-us/ContactUs"
import Footer from "@/components/footer/footer"



export default function Home() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <About/>
      <Languages/>
      <Portfolio/>
      <Services/> 
      <Testimonials/>
      <Conractus/>
      <Footer/>
    </>
  );
}



/* NOTES

html to design

ye website html project ko figma mein convert kar sakti hai. vewports => (Browser (1336px)) Themes => (Browser theme)
Capture Full Page => file download hogi computer downloads mein or wo file direct figma mein nahi chalegi uske liye kuch 
settings karni parengi. left side pe figma icons mein aa kar neechy ki tarf aik (plugins) ka option hoga uspe aa kar
uske andar aik (manage plugins) ka option hoga uske andy any ke bad aik extension show hogi (html to design) usko run kar denge.
uske bad (Brwose) ke option mein jaa kar computer download mein figma file ko select kar lenge


alt + drag out => figna margin selecter

{" "} space giver


display: inline-flex;

ye property hmare div ko inline block karegi or uske andar ke items ko display flex rakhegi.


Embla Website for Card slidineg

click Get started => React => Installation 
1. npm install embla-carousel-react --save
2. npm install embla-carousel-autoplay --save => khud ba khud chalega autoplay command se after import
import Autoplay from 'embla-carousel-autoplay'

flex: 0 0 0 calc((100% - 64px) / 3);

hmare 6 cards section mein zabar dasti shrink ho rhy the to hamne kaha (flex: 0) jitna tumhra size hai utna lo shrink
mat ho dosra (0) ye kehta hai ke iska jo acutal size hai utna rakho isy grow mat hony do tesra (0) jo iska khud ka
actual size hai isy utna hi rakhi bara chota mat hony do.


display flex container ke andar jo item hoty hain unhy (flex item) kaha jata hai

1.flex-shrink: 0;                    
shrink mat hony do =>  ye 3no property alag alag bhi likh sakty hain.

2.flex-grow: 0;                      
grow mat hony do 

width: calc((100% - 64px) / 3); 
iska jo actual size hai isy utna hi rakho bara choty mat hony do 

Control + shift + T  => short cut

ye 3eno buttons aik sath press karne se hmare vs ke opar jo file extension ham se hatt jati hai wo wapas aa jati hai.

EMAILJS WEBSITE NOTES

Form Input data Website => EmailJS website sign up (getBackend_data)

accounts => public key  [Lw-_vKyDEiGb1d27m]

Email Services => click (add New service) => select Gmail

copy service id => [service_lx3wiac] => click conenct account => chose your account

Send test email to verify configuration => click Create Service button => get testing email in your gmail inbox

Email Template => click Create New Template => edit template and again click Email template setting option get template id [template_g3en3zd]

Now We have 3 items:

1. Public key  => [Lw-_vKyDEiGb1d27m]
2. Service id  => [service_lx3wiac]
3. Template id => [template_g3en3zd]

Go to EmailJS website Home page click => DOC => click intsallation => command run terminal (npm install emailjs-com)

Create file in project root directory => (.env.local) create code in this file extension body (CAPITAL LATTERS) 

code write in .env.local file

NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_lx3wiac
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_g3en3zd
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=Lw-_vKyDEiGb1d27m


Go to .gitignore file and write => .env.local

create folder in src directory => (utils) => create file extension => (emailService.ts) => import import emailjs from "emailjs-com"


Create function in Typescript (emailService.ts) file

export const sendEmail = async (templateParams: Record<string, string>)=>{
    try{
        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

        const response = await emailjs.send(serviceID, templateID, templateParams, publicKey)

        return response;
    }
    catch (error){
        console.error('Failed to send email', error);
        throw error;
    }
}


Go to HTML Form component file code and create => 3 Hooks  

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [message, setMessage] = useState('')

create atrribute in form starting tag => <form onSubmit={handleSubmit}> => copy name (handleSubmit) and create function in component

create function code 

 const handleSubmit = async (e: React.FormEvent) =>{
        e.preventDefault();  // stop submisson

        const templateParams = {
            to_name: "Shoaib Khan",
            from_name: name,
            from_email: email,
            message: message
        };

        try{
            await sendEmail(templateParams)
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



set useState value in user input starting tag

name="name" value={name} onChange={(e)=>setName(e.target.value)}
name="email" value={email} onChange={(e)=>setEmail(e.target.value)}
name="message" value={message} onChange={(e)=>setMessage(e.target.value)}


<---------------------------------------------END---------------------------------------------->
Framer motion library

npm install framer-motion --legacy-peer-deps

import {motion} from "framer-motion"


<motion.span> </motion.span>
opening and closing tag.

animate={{rotate: [0, 15, -10, 20, -10, 0]}}

animation ho sab se pehly (0) yani jis halat mein hai usi mein rhy. phir isy (15) tak rotate krwa do (-10) phir isy
ulti side ki tarf rotate krwao isi tarhn baqi sab bhi last (0) yani end mein isy iski orignal halat mein ley aao.

transition={{duration: 1.5, repeat: Infinity, ease: "easeInOut"}}

ispe 1.5 second ki trasition chlao (repeat: Infinity) jo ruky nahi bas chalti rhy (ease: "easeInOut") start hoty time
slow start ho or rukty time bhi slow start ho.

<---------------------------------------------END---------------------------------------------->
npm React simple typewriter
aik aik words ko chlany ke liye 

npm i react-simple-typewriter

npm i react-simple-typewriter --legacy-peer-deps


import { Typewriter } from 'react-simple-typewriter'

 <Typewriter words={[' A Front End Web Developer', ' Ux Ui Designer']} 
        loop={Infinity}    lagatar chalta rhega
        cursor={true}      cursor iska true rhy
        cursorStyle={"_"}  line hamen under scrore ki show words likhne se pehly
        typeSpeed={80}     words ko kitni speen mein likhna hai
        deleteSpeed={50}  first line ko kitni speed mein delete kar ke dosri line ko likhy
        delaySpeed={1500}  delay time itna rhy lines ka.
  />

<---------------------------------------------END---------------------------------------------->
framer motion for div

initial={{opacity: 0, x: -100}}

start jab ho to ye ghaib ho or x yani horizenter mein screen se bahar chala jaye (-100)% jitna

whileInView={{opacity: 1, x: 0}}

ye attribute tab is animation ko work kraega jab ham iske section ko dekhny aenge tab ye opacity apni (1) kar lega
or (x) horizentel mein apni jagah pe aa jaega.

transition={{duration: 2, type: "spring"}}

ye sab 2 second ke andar ho (type: "spring") or ye spring ki tarhn bounce back kare.



global.css

html, body{
    color: white;
    overflow-x: hidden;
}

ye responsive karte waqt side se jo white screen ka space sho hota hai usy khatam kar deta hai


pixel convert to percentage 

347 / 768 * 100 => 45.1822%

ham 347px ko 768 width ki screen ke liye percentage nikal rhy hain. answer (45%)







*/