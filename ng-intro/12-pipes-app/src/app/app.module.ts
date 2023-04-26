import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ButtonModule } from 'primeng/button';
// import { SharedModule } from 'primeng/api';
import { SharedModule } from './shared/shared.module';

/*
  ? Configuración del locale de la app
*/
import localeEsHN from '@angular/common/locales/es-HN';
import localeFrCA from '@angular/common/locales/fr-CA';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEsHN);
registerLocaleData(localeFrCA);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    {
      provide: LOCALE_ID, 
      useValue: 'es-HN'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
  ? Pasos para utilizar ng-prime (con menús)
  * npm install primeng
  * npm install primeicons
  ! Utilizar los respectivos modulos en cada componente
  * npm install @angular/animations --save
  ! importar 'BrowserAnimationsModule' en el AppModule
*/
