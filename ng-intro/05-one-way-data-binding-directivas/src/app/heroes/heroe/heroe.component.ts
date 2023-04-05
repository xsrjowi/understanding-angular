import { Component } from '@angular/core';

/*
    Podemos generar un nuevo componente de forma automática mediante:
      ng generate component <path>/<nombre-componente>

    Ejemplo:
      ng generate component heroes/listado
*/

@Component({
    selector: 'app-heroe',
    /*
        En este caso, utilizaremos 'templateUrl, ya que nos queremos referir a una template que se ubica en otro archivo
          para ello, indicaremos que se ubica dentro del mismo directorio, y añadiremos su nombre
    */
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent {
    nombre: string = "Ironman";
    edad: number = 45;

    get nombreCapitalizado() {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(): void {
        this.nombre = "Spiderman";
    }

    cambiarEdad(): void {
        this.edad = 30;
    }
}