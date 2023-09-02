import Item from "../Item/Item"
import "./item-style.css"

const ItemList = ( {productos} )=> {
    return (
       <div className="contenedor-item">
            {productos.map((prod)=>
            <Item producto={prod} key={prod.id}/>)}
       </div>
    )
}

export default ItemList