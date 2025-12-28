import Card from './Card'
import java from '../assets/Images/java.png'
import Cplus from '../assets/Images/C++.png'
import js from '../assets/Images/JavaScript.png'
import spring from '../assets/Images/Springboot.png'
import React from '../assets/Images/React.png'
import MySql from '../assets/Images/MySql.png'
import Oracle from '../assets/Images/Oracle.png'
import Mongo from '../assets/Images/Mongo.png'
import arrow from '../assets/Images/down-arrow.png'
import "../assets/stylesheets/Responsive.css"
import "../assets/stylesheets/Slide.css"
import { useState } from "react"
export default function Slide(){
    const [index,setIndex]=useState(1);
    const changeSlide=()=>{
        const slide=document.getElementById("contain");
        setIndex(index+1);
        if(index<2){
            if(index==20){
            slide.style.transform = `translateX(-${index * 190.4}%)`;

            }else{
                slide.style.transform = `translateX(-${index * 125.4}%)`;
            }
        }else{
            setIndex(0);
             slide.style.transform = `translateX(-${index * 125.4}%)`;


        }
    }
    return(
    <section className="slide-container">
    <div id="contain" >
        {/* Slide1 */}
      <div id="slide1" className="slides" >

                <div className='title' >
                    <h1 style={{color:'#ffd700'}}>Programming language</h1>
                </div>
        
                <div className="Card-container" >
                        <Card path={java} description="Java is a popular, object-oriented, and platform-independent programming language designed for creating applications and services for the internet. "/>
                        <Card path={Cplus} description="C++ is a powerful, general-purpose, object-oriented programming language developed by Bjarne Stroustrup as an extension of the C language. It is known for its performance, efficiency, and ability to provide low-level memory access, making it suitable for system programming, game development, operating systems, and other high-performance applications.  "/>
            <Card path={js} description="JavaScript is a high-level, dynamic, and interpreted programming language primarily used to create interactive and dynamic content on websites. It works alongside HTML, which provides the structure of a webpage, and CSS, which handles the styling, to bring web pages to life."/>
                </div>

         </div>

         {/* Slide2 */}
         <div className="slides">
            
                    <div className='title'>
                        <h1 style={{color:'#ffd700'}}>Frameworks</h1>
                    </div>
                
                    <div className='Card-container'>
                    <Card path={spring} description="JSpring Boot is an open-source framework built on top of the Spring Framework in Java, designed to simplify the development of production-ready, stand-alone, and microservice-based applications. It aims to reduce the configuration boilerplate and accelerate the development and deployment process."/>

                    <Card path={React} description="React (also known as React.js or ReactJS) is an open-source JavaScript library for building user interfaces (UIs), particularly for single-page applications. It was developed and is maintained by Facebook."/>
                    </div> 
         </div>
        <div className="slides">
             <div className='title'>
        <h1 style={{color:'#ffd700'}}>Databases</h1>
      </div>
   
      <div className='Card-container'>
      <Card path={MySql} description="MySQL is an open-source relational database management system (RDBMS). It is widely used to store, manage, and retrieve data for various applications, especially web-based ones. "/>

      <Card path={Mongo} description="MongoDB is an open-source, document-oriented NoSQL database that stores data in flexible, JSON-like documents called BSON. Unlike traditional relational databases that use tables, MongoDB organizes data into collections of these documents, which allows for a dynamic schema and makes it well-suited for modern applications with varying and unstructured data needs. It is known for its high performance and horizontal scalability. "/>

      <Card path={Oracle} description="Oracle can refer to the American technology company Oracle or its flagship product, a relational database management system (RDBMS) called Oracle Database. The company offers a wide range of business software, cloud applications, and cloud infrastructure, while the database is used to manage and store critical business data like customer and financial information. "/>
      
      </div>
       
        </div>
       
    </div>
        <div id="arrow-container">
           <button onClick={()=>changeSlide()}>
             <img src={arrow} id="arrow" ></img>
           </button>
        </div>
    </section>
    )
}