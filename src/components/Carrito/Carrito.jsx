import { useContext } from "react"
import { CartContex } from "../../contex/CartContex"
import { Link } from "react-router-dom"
import "./carrito.css"

const Carrito = ()=> {

    const { carrito , precioTotal , setCarrito } = useContext(CartContex)

 
    return (
        <div className="contenedor">
            {
            carrito.map((producto) => (
                <div key={producto.id}>
                    <h3>{producto.nombre}</h3>
                    <p>Precio Unitaro: ${producto.precio}</p>
                    <p>Precio Total: $ {producto.precio * producto.cont}</p>
                    <p>Cant: {producto.cont}</p>
                </div>
            ))
            }
            
            <h3>Precio Total: $ {precioTotal()}</h3>
            <button className="btn" onClick={()=>{setCarrito([])}} >Vaciar Carrito</button>
            <Link className="btn" to="/checkout">Finalizar Compra</Link>
            
        </div>
    )
}

export default Carrito