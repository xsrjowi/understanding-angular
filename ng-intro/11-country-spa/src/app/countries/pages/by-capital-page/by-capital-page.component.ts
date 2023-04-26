import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit {
  // * Una vez obtengamos la respuesta de la API, la introduciremos en este array
  // *   por tal de poder, posteriormente, mostrar sus valores en el HTML
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }

  // ? Como en este método nos interesa obtener el resultado, nos subscribimos para
  // ?   obtener el contenido de la petición
  searchByCapital(therm: string) {
    this.isLoading = true;
    this.countriesService.searchCapital(therm)
      .subscribe(
        responseCountries => {
          this.countries = responseCountries;
          this.isLoading = false;
        }  
      );
  }
}
