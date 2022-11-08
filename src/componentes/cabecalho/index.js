import "./cabecalho.css"

function Cabecalho(props){
    return(
        <>
        <img className="banner" src={props.imagem} alt='Banner do usuário'/>
        <section className="cabecalho">
            <img src={`http://github.com/${props.github}.png`} alt={props.nome} />
            <div>
                <h2>{props.nome}</h2>
                <p>{props.cargo}</p>
            </div>
        </section>
        </>
    )
}

export default Cabecalho