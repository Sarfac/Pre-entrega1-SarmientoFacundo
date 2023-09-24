import { useContext } from "react"
import { CartContex } from "../../contex/CartContex"

const Carrito = ()=> {

    const { carrito , precioTotal } = useContext(CartContex)

 
    return (
        <div>
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
            <button>Vaciar Carrito</button>
            
        </div>
    )
}

export default Carrito