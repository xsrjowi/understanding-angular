import { Component } from '@angular/core';

// Mediante la sigueinte linea, podemos definir exactamente lo que se quiere mostrar en 'app.component.html'
@Component({
selector:"app-root",
// Mediante la sigueinte linea, podemos definir exactamente lo que se quiere mostrar en 'app.component.html'
// template[:] `<h1>Hola de nuevo</h1>`
templateUrl: "app.component.html"

})

// Al ser una clase, podemos modificar la clave de sus atributos, per
//  justamente por eso, si lo cambiamos de raíz, tendremos que cambiar en todos lados donde se use
export class AppComponent {
  // También aqui, como ya vimos anteriormente, podremos definir el tipado de la variable
  // Habitualmente, estos atributos ya serán público, pero para mejorar la lectura, podríamos volver a definirlo
  /* public */titulo: string = '01-Bases';
}
