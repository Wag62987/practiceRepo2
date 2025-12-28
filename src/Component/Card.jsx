import '../assets/stylesheets/index.css'
function Card(props){
    const img=props.path;
    const description=props.description;

    return(
    <>
        <div className="card" style={{minWidth:"100px"}}>
            <img src={img} alt="Logo"style={{width:"80px"}} />
             <article>
                <p style={{color:'white'}}>{description}</p>
            </article>
        </div>
    </>);
}

export default Card;