import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Tarea: Crear un módulo para evitar utilizar el contador mediante componentes
import { ContadorComponent } from './contador/contador/contador.component';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
