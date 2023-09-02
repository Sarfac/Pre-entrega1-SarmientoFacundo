import CartWidget from "../CardWidget/CardWidget";
import "./styleNavbar.css";

const NavBar = () =>{

    return(
        <div className="contenedor-nav">
            <nav className="navBar">
                <h2>Tienda Virtual</h2>
                <div>
                    <button className="btn">Inicio</button>
                    <button className="btn">Nosotros</button>
                    <button className="btn">Contacto</button>
                </div>
                <CartWidget />
            </nav>
        </div>
    )

}

export default NavBar
