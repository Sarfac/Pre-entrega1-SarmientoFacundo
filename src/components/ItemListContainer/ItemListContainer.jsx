import { useState,useEffect } from "react"
import { pedirDatos } from "./pedirDatos.js"
import ItemList  from "../ItemList/ItemList.jsx"

const ItemListContainer = () =>{

    const [productos, setProductos] = useState([])
    
    useEffect(()=>{
        pedirDatos()
        .then((res)=>{
            setProductos(res)
        })
    })

    return(
        <div >
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer