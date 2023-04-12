import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    templateUrl: 'contador.component.html'
})

export class ContadorComponent {
    numero: number = 0;
    base: number = 5;
    
    acumular(op: string) {
        return op == '+'
            ? this.numero += this.base
            : this.numero -= this.base
    }
}