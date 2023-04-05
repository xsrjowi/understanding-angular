/*
  Tal y como se menciona abajo, 
  OnInit ha sido añadido manualmente y por ello en la linea siguiente, tampoco aparecía
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

/*
  En el curso, al crear el componente, lo ha hecho implementando directament OnInit
    en este caso, lo he puesto manualmente, así como la función correspondiente.
  
  OnInit, es el primer paso del ciclo de vida de Angular.
  Eso implica, que se ejecutará de forma automática

*/
export class ListadoComponent /* implements OnInit */ {
  /*
    constructor() { 
      console.log("constructor");
    }
  */

  /*
    Un caso práctico donde podríamos utilizar OnInit, es para importar datos 
      ya sea de una API o de una BD, para disponer de ellos desde el inicio
  */

  /*
    ngOnInit(): void {
      console.log("ngOnInit");
    }
  */

  heroes: string[] = ["Spiderman", "Ironman", "Hulk", "Thor", "Capitán America"];
  heroeBorrado: string = "....";

  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.shift() || "....";
  }
}
