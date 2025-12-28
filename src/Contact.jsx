import instagram from "../src/assets/Images/instagram.png"
import github from "../src/assets/Images/github.png"
import "./assets/stylesheets/index.css"
import { useState } from "react"
export default function Contact(){
    const [message,setmessage]=useState("");
    const handleFeedback=()=>{
        const body=message;
        if(message==""){
            alert("Pls give feedback");
        }else{
          alert("thankyou for giving feedback");
        }
    }
    return(<>
    <div  className="contain">
       <section id="social-sec" className="contact-sec">
        <h1>Connect with me :)</h1>
        <div className="img-container">
          <a href="https://www.instagram.com/blaze_wag62987?igsh=MXQxMHR6GinMjAwNQ==">  <img src={instagram} alt="instagram" className="social-img"/></a>
           <a href="https://github.com/Wag62987"> <img src={github} alt="github" className="social-img"/></a>
        </div>
       </section>
       <section  className="contact-sec" id="feedback-sec">
       <h1>Feedback</h1>
        <form action={()=>handleFeedback()}>
           <textarea name="" id="" placeholder="Write something here"  value={message} onChange={(e)=>setmessage(e.target.value)}></textarea>
           <div id="button-con">
            <button type="submit" id="submit-but">Submit</button>
           </div>
        </form>
       </section>
    </div>
    </>)
}