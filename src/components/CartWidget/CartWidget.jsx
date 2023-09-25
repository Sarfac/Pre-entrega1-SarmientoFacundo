import { Link } from "react-router-dom"
import cart from "./assets/cart.svg"
import { useContext } from "react"
import { CartContex } from "../../contex/CartContex"
import "./cart-css.css"

const CartWidget= () =>{

    const { cantCarrito } = useContext(CartContex)

    return (
        <div >
            <Link to='/carrito' className="carrito"><img src={cart} alt="cart"/>
                <span className="contador">{cantCarrito()}</span>
            </Link>
            
        </div>
    )
}

export default CartWidget