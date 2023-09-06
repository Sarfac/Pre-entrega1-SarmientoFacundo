import "./styles-item-detail.css"
import ItemCount from "../ItemCount/ItemCount.jsx"

const ItemDetail = ( {produc} ) => {
    return(
        <div>
            
            <div className="card-producto">
                <img src={produc.img} alt="" />
                <div>
                    <p>Precio: {produc.precio}</p>
                    <p>{produc.nombre}</p>
                    <p>{produc.descrip}</p>
                </div>
                <ItemCount />
            </div>
        </div>
    )
} 

export default ItemDetail