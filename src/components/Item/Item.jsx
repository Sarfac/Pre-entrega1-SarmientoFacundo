import "./item-style.css"

const Item = ( {producto} )=> {
    return (
        <div className="card">
            <h2>{producto.nombre}</h2>
            <img src={producto.img} alt="" />
            <div className="card-info">
                <p>Precio:$ {producto.precio}</p>
                <a className="btn" href={producto.id}>+ Ver mas</a>
            </div>
            
        </div>
    )
}

export default Item