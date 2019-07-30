import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FilasComponenteComponent } from './filas-componente/filas-componente.component';
import { CriarFilaComponent } from './criar-fila/criar-fila.component';

@NgModule({
  declarations: [
    AppComponent,
    FilasComponenteComponent,
    CriarFilaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
