import "./item-style.css"

const Item = ( {producto} )=> {
    return (
        <div className="card">
            <h2>{producto.nombre}</h2>
            <img src={producto.img} alt="" />
            <p>Precio:$ {producto.precio}</p>
            <a href={producto.id}>Comprar</a>
        </div>
    )
}

export default Item