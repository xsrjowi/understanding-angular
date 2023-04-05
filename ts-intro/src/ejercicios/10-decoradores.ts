/*
    ===== Código de TypeScript =====
*/
function classDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    };
}

// Los decoradores sirven para que cada clase / función, tenga un comportamiento independiente
//  Un decorador es una función que expande su clase, añadiendo funcionalidades especiales

// Para poder utilizar los decoradores, deberemos activar dentro del archivo `tsconfig.json`,
//   `experimentalDecorators` = true
@classDecorator
class MiSuperClase {
    public miAtrubuto: string = 'ABC'

    imprimir() {
        console.log("Hola mundo")
    }
}

// Cuando utilizamos un decorador, será necesario cancelar el proceso (^C) y volver a iniciarlo (npm start)
console.log(MiSuperClase)

const miClase = new MiSuperClase

console.log(miClase)