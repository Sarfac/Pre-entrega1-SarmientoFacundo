import { useEffect } from "react"
import { useState } from "react"
import { pedirDatosPorID } from "../../pedirDatos"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = ( {itemID} )=> {

    const [ item , setItem ] = useState(1)
    let id = useParams().id

    

    useEffect(() => {
        pedirDatosPorID(Number(id))
            .then((res)=> {
                setItem(res)
            })
    },[id])

    return (
        <div>
            { item && <ItemDetail produc = {item} />}
        </div>
    )
}

export default ItemDetailContainer