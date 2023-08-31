import inventario from "./inventario.json";

export const pedirDatos = ()=> {
    return new Promise((resolve, reject) => {
        resolve(inventario)
    })
}

