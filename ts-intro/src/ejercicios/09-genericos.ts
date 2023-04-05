/*
    ===== Código de TypeScript =====
*/

// al declarar queTipoSoy<T>, le estamos diciendo que la función será del tipo que reciba por parámetros
// por eso mismo, el argumento que recibirá, será de tipo T, que implicará que si se pasa un string es string, 
// o en su defecto si se pasa un numero, será de tipo number, ect.
function queTipoSoy<T>(argumento: T) {
    return argumento;
}

let soyString = queTipoSoy("Hola mundo")
let soyNumero = queTipoSoy(100)
let soyArray = queTipoSoy([1, 2, 3])

let soyExplicito = queTipoSoy<number>(150)
