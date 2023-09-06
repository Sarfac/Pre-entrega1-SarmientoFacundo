import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./styleNavbar.css";

const NavBar = () =>{

    return(
        <div className="contenedor-nav">
            <nav className="navBar">
                <Link className="btn" to="/" >Tienda Virtual </Link>
                <div>
                    <Link className="btn" to="/categoria/inicial">Inicial </Link>
                    <Link className="btn" to="/categoria/avanzado">Avanzado </Link>
                </div>
                <CartWidget />
            </nav>
        </div>
    )

}

export default NavBar
