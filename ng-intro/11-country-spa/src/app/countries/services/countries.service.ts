import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, switchMap, tap } from 'rxjs';

import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store.interface';

@Injectable({providedIn: 'root'})
export class CountriesService {
    private apiURL = 'https://restcountries.com/v3.1';

    public cacheStore: CacheStore = {
        byCapital:   { term: '', countries: [] },
        byCountries: { term: '', countries: [] },
        byRegion:    { region: '', countries: [] },
      }

    constructor(private http: HttpClient) { }

    private saveToLocalStorage() {
      localStorage.setItem( 'cacheStore', JSON.stringify( this.cacheStore ));
    }
  
    private loadFromLocalStorage() {
      if ( !localStorage.getItem('cacheStore') ) return;
  
      this.cacheStore = JSON.parse( localStorage.getItem('cacheStore')! );
    }

    private getCountriesRequest(url: string): Observable<Country[]> {
        return this.http.get<Country[]>(url)
            .pipe(
                catchError( () => of([]) ),
                //delay(2000),
            )
    }

    // ! Al intentar replicar el video-tutorial, aparece un error, mencionando que
    // !   no se puede asignar el tipo <Country | null> a <Country | never[] | null>
    searchCountryByAlphaCode(code: string): Observable<Country[] /* | null */> {
        const url = `${this.apiURL}/alpha/${code}`;

        return this.http.get<Country[]>(url)
            .pipe(
                /*
                    map(countries => countries.length > 0
                        ? countries[0]
                        : null
                    ),
                    catchError( () => of([]) )
                */
            );
    }
    
    // ? Este método únicamente define las bases del consumo de la API
    // ?   Posteriormente para ejecutarla, deberemos aádir la propiedad .subscribe
    searchCapital(therm: string): Observable<Country[]> {
        const url = `${this.apiURL}/capital/${therm}`;

        // * En primera instancia, realizamos una petición a la API.
        // ? Una vez realizada, controlamos mediante un 'pipe', el control de excepciones
        // ! 'catchError' será el que nos pueda proveer el control sobre los errores
        // ? En caso de haber un error, devolveremos 'of([])', lo cual nos devolverá un array vacío
        // ?   'of([])' devuelve un nuevo 'Observable' con valor de un array
        return this.http.get<Country[]>(url)
            .pipe(
                tap( countries => this.cacheStore.byCapital = { term: therm, countries: countries } ),
                catchError(error => {
                    console.log(error);
                    return of([])
                })
                /*
                    tap(countries => console.log("Paso por el tap", countries)),
                    map(countries => [])
                */
            );
    }

    searchCountry(therm: string): Observable<Country[]> {
        const url = `${this.apiURL}/name/${therm}`;

        return this.http.get<Country[]>(url)
            .pipe(
                catchError(error => {
                    console.log(error);
                    return of([])
                })
            );
    }

    searchRegion(region: string): Observable<Country[]> {
        const url = `${this.apiURL}/region/${region}`;

        return this.http.get<Country[]>(url)
            .pipe(
                catchError(error => {
                    console.log(error);
                    return of([])
                })
            );
    }
}