import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CountrySmall } from '../interfaces/countries.interface';
import { Observable, map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CountriesService {
    // ? Probar a utilizar -> 'http://api.countrylayer.com/'
    private baseUrl: string = "https://restcountries.com/v3.1";
    private _regions: string[] = [ 'Áfric', 'Asia', 'Europe', 'Oceanic', 'United States of América' ];

    get regions() {
        return [ ...this._regions ];
    }

    constructor(
        private http: HttpClient
    ) { }

    // Todo: Filtrar los paises obtenidos por su región real
    // Todo:   Añadir ?fields=cca3:name

    getCountriesByRegion(region: string): Observable<CountrySmall[]> {
        const mappedCountries: CountrySmall[] = [];
        const url: string = `${this.baseUrl}/region/${region}`;
        return this.http.get<CountrySmall[]>(url)
    }
}
