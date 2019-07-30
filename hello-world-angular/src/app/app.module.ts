import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BotaoComponent } from './botao/botao.component';
import { TextoVazioComponent } from './texto-vazio/texto-vazio.component';

@NgModule({
  declarations: [
    AppComponent,
    BotaoComponent,
    TextoVazioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
