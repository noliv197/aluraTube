import "./cardVideo.css"
function CardVideo(props){

    return(
        <div className="card">
            <a href={props.url}><img src={props.thumb} alt={props.titulo}/></a>
            <p>{props.titulo}</p>
        </div>
    )
}

export default CardVideo