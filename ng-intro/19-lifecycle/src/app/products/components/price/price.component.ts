import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  public price: number = 0;

  public intervals$?: Subscription;
  
  ngOnInit(): void {
    console.log('PriceComponent: ngOnInit');
    this.intervals$ = interval(1000)
      .subscribe(value => console.log(`Tick: ${value}`));
    
    
    
    /* ? No es práctico
      window.addEventListener( () => {

      });
    */
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('PriceComponent: ngOnChanges');
    console.log({ changes });
  }
  ngOnDestroy(): void {
    console.log('PriceComponent: ngOnDestroy');
    this.intervals$?.unsubscribe();
  }


}
