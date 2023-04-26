import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
  public nameLower: string = 'joel mas prades'
  public nameUpper: string = 'JOEL MAS PRADES'
  public fullName: string = 'JoEl MaS pRaDeS'

  public customDate: Date = new Date();
}
