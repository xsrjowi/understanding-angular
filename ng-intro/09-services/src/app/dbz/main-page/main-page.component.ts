import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  nuevo: Character = {
    name: 'Maestro Roshi',
    power: 1000
  }

  characters: Character[] = [
    {
      name: 'Krillin',
      power: 1000
    }, {
      name: 'Goku',
      power: 9500
    }, {
      name: 'Vegeta',
      power: 7500 
    }
  ]

  constructor(private dbzservice: DbzService) {
    
  }
}
