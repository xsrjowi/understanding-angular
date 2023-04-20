import { Component, Input } from '@angular/core';
import { DbzService } from 'src/app/services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})

export class PersonajesComponent {
  // @Input() personajes: any[] = [];

  get personajes() {
    return this.dbzService.personajes;
  }

  constructor(private dbzService: DbzService) {
    this.dbzService._personajes
  }
}
