import CardVideo from "../cardVideo"
import "./secaoVideos.css"

function SecaoVideos(props){
    const videos = props.video
    return(
        <section className="secao-videos">
            <h3>{props.nome}</h3>
            <section className="playlist">
                {videos.map(video=>
                    <CardVideo
                        key = {video.url}
                        url = {video.url}
                        thumb = {video.thumb}
                        titulo = {video.titulo}
                    />
                )}
            </section>           
        </section>
    )
}

export default SecaoVideos