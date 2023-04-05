import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  titulo: string = '02-contador-app';
  numero: number = 10;
  base: number = 5;

  /* 
    Para simplificar la lectura, optimizaremos el código,
      por ello, el sigueinte código no lo vamos a utilizar (es correcto)
  */
  sumar() {
    this.numero += 1
  }

  restar() {
    this.numero -= 1
  }

  // Óprimo:
  acumular(valor: number) {
    this.numero += valor;
  }

  acumular5(op: string) {
    return op == '+' 
      ? this.numero += this.base 
      : this.numero -= this.base 
  }

  /*
    La solución propuesta al punto anterior era:
    
    acumular5(valor: number) {
      this.numero += valor;
    }
  */
}
