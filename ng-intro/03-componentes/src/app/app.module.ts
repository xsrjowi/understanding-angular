import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador.component';

@NgModule({
  declarations: [
    // para que funcionen nuestros componentes, deberemos importarlos arriba, y declararlos a continuación:
    AppComponent,
    ContadorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
