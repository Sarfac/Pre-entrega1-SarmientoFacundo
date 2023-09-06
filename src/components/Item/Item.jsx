import { Link } from "react-router-dom"
import "./item-style.css"

const Item = ( {producto} )=> {
    return (
        <div className="card">
            <h2>{producto.nombre}</h2>
            <img src={producto.img} alt="" />
            <div className="card-info">
                <p>Precio:$ {producto.precio}</p>
                <p>Categoria: {producto.categoria}</p>
                <Link className="btn" to={`/item/${producto.id}`}>+ Ver mas</Link>
            </div>
            
        </div>
    )
}

export default Item