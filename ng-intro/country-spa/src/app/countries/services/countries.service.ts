import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {
    private apiURL = 'https://restcountries.com/v3.1';

    constructor(private http: HttpClient) { }
    
    // ? Este método únicamente define las bases del consumo de la API
    // ?   Posteriormente para ejecutarla, deberemos aádir la propiedad .subscribe
    searchCapital(therm: string): Observable<Country[]> {
        const url = `${this.apiURL}/capital/${therm}`;

        return this.http.get<Country[]>(url);
    }
}