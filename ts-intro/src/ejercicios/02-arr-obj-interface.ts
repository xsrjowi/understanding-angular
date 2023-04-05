/*
    ===== Código de TypeScript =====
*/

// [NO] let habilidades: (boolean | string | number) []= ["bash", "counter", "healing"];
let habilidades: string[] = ["bash", "counter", "healing"];

// No permitirá ñadir nuevas propiedades
const persona = {
    nombre: "Joel",
    hp: 100,
    habilidades: ["bash", "counter", "healing"]
}

// Forma correcta:
interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: "Joel",
    hp: 100,
    habilidades: ["Creatividad", "Autocrítica"],
}

personaje.puebloNatal = "Barcelona";

// Imprime un objeto en formato tabla
console.table(personaje);