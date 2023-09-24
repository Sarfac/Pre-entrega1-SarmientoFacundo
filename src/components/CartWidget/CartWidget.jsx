import { Link } from "react-router-dom"
import cart from "./assets/cart.svg"
import { useContext } from "react"
import { CartContex } from "../../contex/CartContex"

const CartWidget= () =>{

    const { cantCarrito } = useContext(CartContex)
    return (
        <div>
            <Link to='/carrito'><img src={cart} alt="cart"/>
                <span>{cantCarrito()}</span>
            </Link>
            
        </div>
    )
}

export default CartWidget