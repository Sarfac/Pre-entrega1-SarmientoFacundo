import inventario from "./inventario.json";

export const pedirDatos = ()=> {
    return new Promise((resolve, reject) => {
        resolve(inventario)
    })
}


export const pedirDatosPorID = (id) => {
    return new Promise((resolve , reject) => {
        const item = inventario.find((elem) => elem.id === id)

        if (item){
            resolve(item)
        }else{
            reject(console.log("no se encontro el producto"))
        }

    } )
}