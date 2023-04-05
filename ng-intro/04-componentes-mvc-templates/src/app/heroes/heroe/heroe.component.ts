import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    /*
        En este caso, utilizaremos 'templateUrl, ya que nos queremos referir a una template que se ubica en otro archivo
          para ello, indicaremos que se ubica dentro del mismo directorio, y añadiremos su nombre
    */
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent {
    nombre: string = "ironman";
    edad: number = 45;

    get nombreCapitalizado() {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }
}