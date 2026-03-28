import { useEffect, useState,useRef } from 'react';
import profile from '../assets/Images/profile.jpeg'
import '../assets/stylesheets/index.css'
import "../assets/stylesheets/Responsive.css"
import something from;
function Welcome(){
    const WelcomeMsg="Welcome to My Portfolio";
    const msgLength=WelcomeMsg.length;
    const [text,settext]=useState("");
    const reverse =useRef(0);
    const index=useRef(0);
   function sleep(){
   
   }
    useEffect(()=>{

      const interval=setInterval(()=>{
      if(reverse.current==1){    
        --index.current;
        settext(WelcomeMsg.substring(0,index.current))    
        if(index.current<=0){
          reverse.current=0;
        }   
       }
      else{
        ++index.current;
        settext(WelcomeMsg.substring(0,index.current))
        if(index.current==msgLength){
       
          reverse.current=1;
        }
       }
      
      },100)
      return ()=>clearInterval(interval);
    },[])
    // useEffect(()=>{
    //   const profile=document.getElementById("profile");
    //   const Up=useRef(0);
    //   setInterval(()=>{
    //     profile.style.transform="translateY(-10%)";
    //   },700)
    // })
  return(<>
  <div className='Contain'>

        <section className='msg-container'>
        <h1 className='Welcome-msg'>{text}</h1>
        </section>
  <section  className='sec'>
      <div className='container' id="sec-1">
        <span style={{fontSize:'1.8em'}}>Hi, I'm Mayur Waghade</span>
          <p  style={{color:'#e2e2e2'}}>
            A passionate Full Stack Developer who loves building clean functional, and intelligent digital solutions.
              <br></br>I specialize in creating modern web applications using Spring Boot, React, AI/ML, and Python, focusing on building projects that solve real-world problems.
               <br></br>With a strong interest in AI-powered applications, system development, and user-focused design, I enjoy turning ideas into working products.
                <br></br>
                I constantly learn new technologies, experiment with new concepts, and improve my skills through practical projects.
          </p>
      </div>
      <div id="sec-2" >
        <img src={profile} alt="profile picture" id="profile"/>
      </div>
  </section>
  </div>
  <div className="Contain" style={{margin:"2.8vw"}}>
    <section className='title-m' style={{border:"none"}}>
      <h1 style={{color:"white" , fontSize:"4rem"}}>Education</h1>
    </section>
    <div id='ed'>
<section className='about-container'>
      <article>
      <h2>High school</h2>
      <h3><span>Late Ragiv Ghandhi Memorial English High School </span>,from Maharashtra , Dist-Wardha,Taluka-Karanja Ghadge</h3>
      </article>
      <h2>06/2018 – 05/2023</h2>
    </section>
    <section className='about-container'>
      <article>
      <h2>Diploma In Computer Science and Engineering</h2>
      <h3><span>Wainganga College of Engineering and Management</span>,from Maharashtra , Dist-Nagpur,near Butipuri,Dongergao </h3>

      </article>
      <h2>06/2023 – 05/2026</h2>
    </section>
  </div>
    </div>
     
  </>)
}

export default Welcome;