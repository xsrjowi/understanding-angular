// Devuelve un arreglo de dos numeros

function calculaISV(productos: Producto[]) : [number, number] {
    let total = 0;
    productos.forEach(({ precio }) => {
        total += precio;
    });

    return [total, total * 0.15];
}

interface Producto {
    desc: string;
    precio: number;
}