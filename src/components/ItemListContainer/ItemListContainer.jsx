import { useState,useEffect } from "react"
import { pedirDatos } from "../../pedirDatos.js"
import ItemList  from "../ItemList/ItemList.jsx"
import { useParams } from "react-router-dom"

const ItemListContainer = () =>{

    const [productos, setProductos] = useState([])
    const categoria = useParams().categoria

    useEffect(()=>{
        pedirDatos()
        .then((res)=>{
            if (categoria){
                setProductos(res.filter((producto) => producto.categoria === categoria))
            }else{
                setProductos(res)
            }
            
        })
    },[categoria])

    return(
        <div>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer