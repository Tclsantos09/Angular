import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-texto-vazio',
  templateUrl: './texto-vazio.component.html',
  styleUrls: ['./texto-vazio.component.scss']
})
export class TextoVazioComponent implements OnInit {

  textoBotao = "Clique";
  texto = "";

  constructor() { }

  ngOnInit() {
  }

  exibeTexto(){
    this.texto = "Aleatório";
  }

}
