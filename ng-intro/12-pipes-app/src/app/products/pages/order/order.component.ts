import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public orderBy: keyof Hero | undefined | "" = ""; // * o bien: orderBy?: keyof Hero; 

  public heroes: Hero[] = [
    {
      name: "Superman",
      canFly: true,
      color: Color.blue,
    },
    {
      name: "Batman",
      canFly: false,
      color: Color.black,
    },
    {
      name: "Daredevil",
      canFly: false,
      color: Color.red,
    },
    {
      name: "Robin",
      canFly: false,
      color: Color.green,
    }
  ];

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero) {
    this.orderBy = value;
  }
}
