import CartWidget from "../CardWidget/CardWidget";
import "./styleNavbar.css";

const NavBar = () =>{

    return(
        <div className="contenedor">
            <nav className="navBar">
                <h2>Tienda Virtual</h2>
                <div>
                    <button>Camisetas</button>
                    <button>Pantalones</button>
                    <button>Buzos</button>
                </div>
                <CartWidget />
            </nav>
        </div>
    )

}

export default NavBar
