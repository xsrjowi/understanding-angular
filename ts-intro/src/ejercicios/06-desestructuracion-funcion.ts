/*
    ===== Código de TypeScript =====
*/

// Mediante el export, podemos permitir importar desde cualquier lado -> 07-importaciones-exportaciones
export interface Producto {
    nombre: string,
    precio: number
}

const telefono: Producto = {
    nombre: "Nokia A1",
    precio: 150
}

const tableta: Producto = {
    nombre: "iPad Air",
    precio: 350
}

// Es recomendable especificar siempre el tipo de retorno (pueden ser varios)
// También podemos exportar funciones para utilizarlas en otros archivos
export function calcularISV(productos: Producto[]): [number, number] {
    let total = 0
    
    // Podriamos declarar el tipo de variable (: Producto) aunque no es necesario ya que TS ya lo supone
    // Podemos también hacer una desestructuración dentro del foreach
    // De normal hariamos: productos.forEach((producto) => {
    productos.forEach(({ precio }) => { // Hacemos la desestructuración de producto
        // total += producto.precio
        total += precio
    })

    return [total, total * 0.21]
}

const articulos = [ telefono, tableta ]
// const isv = clacularISV(articulos);
// console.log(isv)

const [ total, isv ] = calcularISV(articulos)
console.log("Total: ", total)
console.log("ISV: ", isv)