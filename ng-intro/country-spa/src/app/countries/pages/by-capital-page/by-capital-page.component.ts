import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {
  // * Una vez obtengamos la respuesta de la API, la introduciremos en este array
  // *   por tal de poder, posteriormente, mostrar sus valores en el HTML
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) { }

  // ? Como en este método nos interesa obtener el resultado, nos subscribimos para
  // ?   obtener el contenido de la petición
  searchByCapital(therm: string) {
    this.countriesService.searchCapital(therm)
      .subscribe(
        responseCountries => {
          this.countries = responseCountries;
        }  
      );
  }
}
