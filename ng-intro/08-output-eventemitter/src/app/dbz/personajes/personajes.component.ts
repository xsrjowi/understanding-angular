import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})

// mediante los 'tags' pertinentes, podremos filtrar el contenido sobre el que interactuaremos
// al añadir un tag de clase con nombre redundante, no será necesario añadirlo
export class PersonajesComponent {
  @Input() personajes: any[] = [];
}
