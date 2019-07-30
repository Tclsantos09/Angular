import { Component, OnInit } from '@angular/core';
import { FilasService } from '../filas.service';

@Component({
  selector: 'app-filas-componente',
  templateUrl: './filas-componente.component.html',
  styleUrls: ['./filas-componente.component.scss']
})
export class FilasComponenteComponent implements OnInit {

  nomeFila: string;
  idFila: number;

  constructor(private filas: FilasService) { 
  }

  ngOnInit() {
  }

  public leiaDaFila(){
    return this.filas.getFilas();
  }

  adicionarFila(){
    // this.filas.push({
    //   id: this.idFila, nome: this.nomeFila
    // });
    // console.log('Cliquei');
  }
}
