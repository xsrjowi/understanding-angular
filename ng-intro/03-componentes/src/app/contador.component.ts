import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h3>La base es <strong>{{ base }}</strong></h3>

        <button (click) = "acumular('+')"> + {{ base }}</button>
        <span>{{ numero }}</span>
        <button (click) = "acumular('-')"> + {{ base }}</button>
    `
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