/*
    ===== Código de TypeScript =====
*/

// JS -> Puede ser una suma o una concatenación
function sumarjs(a, b) {
    return a + b;
}

const resultadojs = sumarjs("Joel", "Mas");

console.log(resultadojs);


// TS -> recibe dos numeros y devuelve un numero
function sumar(a: number, b: number): number {
    return a + b;
    // return (a + b).toString();
}

const resultado = sumar(5, 15);

const sumarFlecha = (a: number, b: number) : number => {
    return a + b;
}

// Deveolverá un error, ya que al asignar los valores, base será undefined
function multiplicar(numero, otroNumero, base) {
    return numero * base
}

// const res = multiplicar(10, 20);


// El órden para la solicitud de valores, debe ser; obligados, opcionales, con valor default
function mult(numero: number, otroNumero?: number, base: number = 2) {
    return numero * base;
}

console.log(mult(5));
console.log(mult(5, 0, 10)); // Para cambiar un valor default, deberemos especificar todos los anteriores


// funciones con clases

interface Jugador {
    nombre: string;
    hp: number;
    mostrarHp: (/* a:number, b:number, c: bool */) => void;
}

function curar(personaje: Jugador, curarX): void {
    personaje.hp += curarX;
    console.log(personaje)
}

const nuevoJugador: Jugador = {
    nombre: "Joel",
    hp: 50,
    mostrarHp() {
        console.log("Vida del jugador: ", this.hp)
    }
}

console.log(nuevoJugador);
curar(nuevoJugador, 20);

nuevoJugador.mostrarHp()