import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})

export class AgregarComponent {
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  /*
    @Output()        - Permite escuchar un evento personalizado
    onNuevoPersonaje - Se describe como el evento personalizado que escucharemos
    EventEmmiter()   - Define que va a ser un gestor de eventos
  */
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(event: any) {
    if (this.nuevo.nombre.trim().length === 0) { return; }
    
    console.log(this.nuevo);

    this.onNuevoPersonaje.emit(this.nuevo);
    
    this.nuevo = { 
      nombre: '',
      poder: 0
    }

  }
}
