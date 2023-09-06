import { useState } from "react"
import './item-count.css'


const ItemCount = ()=> {

    const [cont , setCount ] = useState(1)

    const sumarCont = ()=> {
        setCount(cont+1)
    }
    const restarCont = ()=> {
        cont>=1 && setCount(cont-1)
    }
    
    
    return (
        <div>
            <p className="fondo-contador">{cont}</p>
            <button className="btn" onClick={sumarCont}>+</button>
            <button className="btn">Agregar Carrito</button>
            <button className="btn" onClick={restarCont}>-</button>
        </div>
    )
}

export default ItemCount