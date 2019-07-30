import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CriarCategoriaComponent } from './criar-categoria/criar-categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    CriarCategoriaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
