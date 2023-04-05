/*
    ===== Código de TypeScript =====
*/

class PersonaNormal {
    constructor(
        public nobmre: string, 
        public direccion: string
    ) {}
}


// En las interfaces, podemos declarar una func que devolverá un tipo, pero no interactuar directamente
// la mayor diferencia entre las clases e interfaces, será el poder declarar modificadores de acceso
// además, las interfaces, al no existir en JS, no aparecerá en el bundle
// también permtirán crear instancias
class Heroe extends PersonaNormal {
    /*
        alterEgo: string
        edad: number
        nombreReal: string
    */

    // Puede ser muy tedioso hacer el constructor y declarar los atributos de la clase
    // Para ello, puede hacerse de la otra forma (no comentada)
    /*
        constructor(alterEgo: string, nombreReal: string) {
            this.alterEgo = alterEgo
            this.nombreReal = nombreReal
        }
    */

    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string,
    ) {
        super(nombreReal, "New York, USA")
    }
    // En las clases podremos declarar funciones que interactuen con los atributos própios
    imprimirNombre() {
        return this.alterEgo + " " + this.nombreReal
    }
}

const ironman = new Heroe("Ironman", 40, "Tony")

console.log(ironman)