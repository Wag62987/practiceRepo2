
export default function Project(props){
    return(<>
    <div className='project-card'>
        <div className='title-m'>
        <h2 style={{color:'#ffd700'}}>{props.title}</h2>
     </div>
     <div id='description'>
        <p>{props.description}</p>
       <div id='tech-stack'>
        <h3> 
        <span style={{color:"rgb(250,215,0)"}}>Backend:</span> {props.backend}
        </h3>
        <h3>
        <span style={{color:"rgb(250,215,0)"}}> Frontend:</span> {props.frontent}
            </h3>
        <h3> <span style={{color:"rgb(250,215,0)"}}>Database:</span> {props.database}</h3>
        <h3> <span style={{color:"rgb(250,215,0)"}}>Bulid Tool:</span> {props.BulidTool}</h3>
       </div>
     </div>
   
    </div>
    </>)
}