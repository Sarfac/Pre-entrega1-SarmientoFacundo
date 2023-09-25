import { useEffect } from "react"
import { useState } from "react"

import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc} from "firebase/firestore"
import { datos } from "../../firebase/data.js"

const ItemDetailContainer = ( {itemID} )=> {

    const [ item , setItem ] = useState(1)
    let id = useParams().id

    

    useEffect(() => {
        const docRef = doc(datos, "camisetas", id)
            getDoc(docRef)
                .then((res)=>{
                    setItem(
                        {...res.data(),id: res.id}
                    )
                })
    },[id])

    return (
        <div>
            { item && <ItemDetail produc = {item} />}
        </div>
    )
}

export default ItemDetailContainer