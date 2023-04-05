// En caso de haberlxs exportado, podremos importar tanto interficies como funciones -> no lleva el .ts
import { Producto, calcularISV } from "./06-desestructuracion-funcion";

/*
    ===== Código de TypeScript =====
*/

const carritoCompra: Producto[] = [
    {
        nombre: "Telefono 1",
        precio: 100
    },
    {
        nombre: "Telefono 2",
        precio: 150
    }
]

const [ total, isv ] = calcularISV( carritoCompra )