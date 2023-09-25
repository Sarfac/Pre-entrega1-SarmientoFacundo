import { useContext, useState } from "react"
import { CartContex } from "../../contex/CartContex"
import { useForm } from "react-hook-form"
import { collection, addDoc } from "firebase/firestore"
import { datos } from "../../firebase/data.js"
import "./checkout-css.css"


const Checkout = ()=>{

    const { carrito , precioTotal , setCarrito } = useContext(CartContex)

    const { register, handleSubmit } = useForm();

    const [pedidoId, setPedidoId] = useState("");

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }

        const pedidosRef = collection(datos, "pedidos")

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                setCarrito([]);
            })
    }

    if (pedidoId) {
        return (
            <div className="contenedor">
                <h1 className="main-title">Muchas gracias por tu compra</h1>
                <p>Tu número de pedido es: {pedidoId}</p>
            </div>
        )
    }  

    return (
        <>
        <div className="contenedor">
            <h1>Contacto</h1>
            <form className="formulario" onSubmit={handleSubmit(comprar)}>

            <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
            <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
            <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />

            <button className="btn" type="submit">Comprar</button>

            </form>
        </div>
        </>
    )
}

export default Checkout