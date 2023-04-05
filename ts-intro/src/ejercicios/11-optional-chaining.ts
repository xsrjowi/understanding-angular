/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre: String
    hijos?: string[]
}

const pasajero1: Pasajero = {
    nombre: "Fernando"
}

const pasajero2: Pasajero = {
    nombre: "Melissa",
    hijos: [
        "Natalia",
        "Gabriel"
    ]
}

function imprimeHijos(pasajero: Pasajero):void {
    // Añadiremos optional, ya que queremos evitar que produzca un error en caso ser undefined
    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log(cuantosHijos)
}

imprimeHijos(pasajero2)