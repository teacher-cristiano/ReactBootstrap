function ItemCard(props) {
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 cont">
            <img src={props.imagem} alt={props.texto} className="img-fluid" />
            <h3>{props.titulo}</h3>
        </div>
    )
}

export default ItemCard