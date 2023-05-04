import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';
import { User } from '../interfaces/user.interface';
import { Observable, of, tap, catchError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private baseUrl = environments.baseUrl;
    private user?: User;

    constructor(private http: HttpClient) { }

    get currentUser() {
        if(!this.user) return undefined;
        return structuredClone(this.user);
    }

    login(email: string, password: string): Observable<User> {
        // http.post('login', { email, password });
        return this.http.get<User>(`${ this.baseUrl }/users/1`)
            .pipe(
                tap(user => this.user = user),
                tap(user => localStorage.setItem("token", "fasdfsdfsdf.sdfsdf.fsdfsdfe")),
            )
    }

    // ! En el ejemplo, devuelve un Observable<boolean> | boolean
    // Todo: Corregir error -> Se devuelve Observable<User> en vez de Observable<boolean> 
    checkAutentication(): Observable<boolean> {
        if(!localStorage.getItem("token")) return of(false);
        const token = localStorage.getItem("token");
        
        var checkUser = this.http.get<User>(`${ this.baseUrl }/users/1`)
            .pipe(
                tap(user => this.user = user),
                tap(user => !!user),
                catchError(err => of(false))
            );
        
        return of(true);
    }

    logout() {
        this.user = undefined;
        localStorage.clear();
    }
}
