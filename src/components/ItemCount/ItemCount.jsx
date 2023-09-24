import { useContext, useState } from "react"
import './item-count.css'
import { CartContex } from "../../contex/CartContex"


const ItemCount = ({item})=> {

    const {carrito , setCarrito} = useContext(CartContex) 
    console.log(carrito)

    const [cont , setCount ] = useState(1)

    const sumarCont = ()=> {
        setCount(cont+1)
    }
    const restarCont = ()=> {
        cont>1 && setCount(cont-1)
    }
    const agregarCarrito = ()=>{
        const itemAgregado = {...item , cont}
        const nuevoCarrito = [...carrito]
        const estaEnCarrito = nuevoCarrito.find((element) => element.id === itemAgregado.id) 

        if (estaEnCarrito) {
            estaEnCarrito.cont+= cont
        }else{
            nuevoCarrito.push(itemAgregado)
        }
        
        setCarrito( nuevoCarrito )
        
    }
    
    
    return (
        <div>
            <p className="fondo-contador">{cont}</p>
            <button className="btn" onClick={sumarCont}>+</button>
            <button className="btn" onClick={agregarCarrito}>Agregar Carrito </button>
            <button className="btn" onClick={restarCont}>-</button>
        </div>
    )
}

export default ItemCount