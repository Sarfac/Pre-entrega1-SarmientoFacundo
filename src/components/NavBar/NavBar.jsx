import CartWidget from "../CardWidget/CardWidget";
import "./styleNavbar.css";

const NavBar = () =>{

    return(
        <div className="contenedor">
            <nav className="navBar">
                <h2>Tienda Virtual</h2>
                <div>
                    <button className="btn">Camisetas</button>
                    <button className="btn">Pantalones</button>
                    <button className="btn">Buzos</button>
                </div>
                <CartWidget />
            </nav>
        </div>
    )

}

export default NavBar
