import { useEffect } from "react"
import { useState } from "react"
import { pedirDatosPorID } from "../../pedirDatos"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = ( {itemID} )=> {

    const [ item , setItem ] = useState(1)
    console.log(item)

    useEffect(() => {
        pedirDatosPorID(itemID)
            .then((res)=> {
                setItem(res)
            })
    },[itemID])

    return (
        <div>
            { item && <ItemDetail produc = {item} />}
        </div>
    )
}

export default ItemDetailContainer