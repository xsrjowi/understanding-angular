/*
    ===== Código de TypeScript =====
*/

// para este ejercicio, necesitaremos anidar un objeto dentro de la interficio 'SuperHeroe'
// el siguiente ejemplo no es común verlo, porque puede descontrolarse en exceso
// es recomendable extraer cada objeto anidad en una interficie diferente
interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: {
        calle: string;
        pais: string;
        ciudad: string;
    },
    mostrarDireccion: () => string;
}

const superherore = {
    nombre: "Spiderman",
    edad: 30, 
    direccion: {
        calle: "Main St",
        pais: "USA",
        ciudad: "NY"
    },
    mostrarDireccion() {
        return this.nombre + ", " + this.edad + ", " + this.direccion.ciudad + ", " + this.direccion.pais
    }
}

const direccion = superherore.mostrarDireccion();
console.log(direccion);

// Ejemplo normal
interface SH {
    name: string;
    age: number;
    direction: DIRECTION;
    showDirection: () => string;
}

interface DIRECTION {
    street: string;
    country: string;
    city: string;
}

const sh: SH = {
    name: "Spiderman",
    age: 30, 
    direction: {
        street: "Main St",
        country: "USA",
        city: "NY"
    },
    showDirection() {
        return this.name + ", " + this.direction.city + ", " + this.direction.country
    }
}

const direct = sh.showDirection();
console.log(direct);