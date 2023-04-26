import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit{
public country?: Country

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService : CountriesService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.countriesService.searchCountryByAlphaCode(id)),
      )
      .subscribe(c => {
        if(!c) return this.router.navigateByUrl('');
        // Todo: No permite devolver el país
        // return this.country = c
        return;
      });

    /*
      ? Esto se conoce como 'Observable Held'. Básicamente consta de 'Observables' anidados
        this.activatedRoute.params
          ? La manera más óptima sería utilizar la des-estructuración parametrizada
          .subscribe(( { id } ) => {
            this.countriesService.searchCountryByAlphaCode(id)
              .subscribe(country => {
                console.log({ country })
              })
          })
    */
  }
}
