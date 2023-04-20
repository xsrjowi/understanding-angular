import { Injectable } from '@angular/core';
import { Personaje } from '../dbz/interfaces/dbz.interface';

@Injectable()
export class DbzService {
    _personajes: Personaje[] = [
      {
        nombre: 'Goku',
        poder: 15000
      },
      {
        nombre: 'Vegeta',
        poder: 8500
      }
    ];

    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    constructor() {  }

    agregarPersonaje(personaje: Personaje) {
        
    }
}