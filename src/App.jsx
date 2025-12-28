
import './App.css'
import { useRef } from 'react';
import Skills from './Component/Skills';
import Welcome from './Component/Welcome'
import ProjectShowCase from './ProjectShowCase';

import humberger from "./assets/Images/humberger.png"
import cross from "./assets/Images/cross.png"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contact from './Contact';


function App() {
  const set=useRef(0);
  const handleSidebar=()=>{
    
    const sidebar=document.getElementById("sidebar");
    if(set.current==0){
      sidebar.style.display="flex";
      sidebar.style.transform="translateX(0)";
      set.current=1;
    }else{
      set.current=0;
      sidebar.style.transform="translateX(100%)"
      sidebar.style.display="none"
    }
  }
  
  return (
  <>
    
    <BrowserRouter>
       <nav>
         <div><h1 style={{fontStyle:'italic',color:'white',fontWeight:'600', fontSize:"2.3rem"}}>Portfolio</h1>
         </div>
         <div className='navs'>
        <Link to="/">Home</Link>
        <Link to="/Skills">Skills</Link> 
        <Link to="/projects"> Projects</Link>
        <Link to="/contact">Contact</Link>
      

        <img src={humberger} alt="" id='humberger' onClick={()=>{handleSidebar()}}/>
         </div>
      </nav>
      <div id='sidebar'>
         <div id="cross">
         <img src={cross} alt="" id='humberger'  onClick={()=>handleSidebar()}/>
         </div>
          <div className='sidebar-navs'>
            <div>
                <Link to="/" onClick={()=>{handleSidebar()}}>Home</Link>
            </div>
            <div>
                <Link to="/Skills"onClick={()=>{handleSidebar()}}>Skills</Link> 
            </div>
            <div>
               <Link to="/projects" onClick={()=>{handleSidebar()}}> Projects</Link>
            </div>
            <div>
               <Link to="/contact" onClick={()=>{handleSidebar()}}>Contact</Link>
            </div>
            
       
         </div>
      </div>
       <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/Skills" element={<Skills/>} />
        <Route path="/projects" element={<ProjectShowCase/>}></Route>
        <Route path="/contact" element={<Contact/>} />

      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
