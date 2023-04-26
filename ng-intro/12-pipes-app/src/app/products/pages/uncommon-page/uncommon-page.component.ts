import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  // i18n Select
  public name: string = "Joel";
  public gender: "male" | "female" = "male";
  // ? En caso de que se amplie el 'gender' y no se disponga de una opción adiente, no se mostrará valor
  public invitationMap = {
    male: "invitarlo",
    female: "invitarla"
  }

  changeClient(): void {
    this.name = "Melissa";
    this.gender = "female";
  }

  // i18nPlural
  public clients: string[] = ["Maria", "Pedro", "Fernando", "Hernando", "Eduardo", "Melissa", "Natalia"];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando',
  }

  deleteClient(): void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: "Joel",
    age: 22,
    adress: "Hospitalet de Llobregat, Barcelona"
  }

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000)
    .pipe(
      tap(value => console.log("tap", value))
    );

  // Async Pipe Promise
  
  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Tenemos date en la promesa");
      console.log("Tenemos data en la promesa");
      this.name = "Otro nombre";
    }, 3500)
  })
}
