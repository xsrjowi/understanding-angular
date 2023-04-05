/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volume: number;
    seconds: number;
    song: string;
    details: Details
}

interface Details {
    author: string;
    year: number;
}

const reproductor: Reproductor = {
    volume: 90,
    seconds: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

const { volume, seconds, song, details} = reproductor
const { author } = details;


// La sigiente linea, no es práctica porque puedes llegar a confundir una desestructuración con un tipo de dato
// const { volume, seconds, song, details: { author } } = reproductor
// También se puede reasignar el nombre para la variable
// const { volume, seconds, song, details: { author; authorName } } = reproductor

/*
    console.log("Actual volume is " + volume);
    console.log("Actual second is " + seconds);
    console.log("Actual song is " + song);
    console.log("The author is " + author);
*/

// Al desestructurar un array, deberemos hacerlo con [] en vez de {}
// Además, el nombre que utilizemos dará igual, porque cada elemento declarado se asignará por posición
const dbz: string[] = ["Goku", "Vegetta", "Trunks"]
const [ p1, p2, p3 ] = dbz 

// En caso de querer un elemento en posición ejemplo 3, pero no los demás, se añadirán comas para completar espacio
const [ , , pers3 ] = dbz

console.log("1", p1);
console.log("2", p2);
console.log("3", p3);
console.log("Pers 3", pers3);

