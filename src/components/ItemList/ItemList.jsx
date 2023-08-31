import Item from "../Item/Item"
import "./item-style.css"

const ItemList = ( {productos} )=> {
    return (
       <div className="contenedor-item">
            {productos.map((prod)=>
            <Item producto={prod} />)}
       </div>
    )
}

export default ItemList