import { Injectable } from '@angular/core';
import { Fila } from './model/fila';

@Injectable({
  providedIn: 'root'
})
export class FilasService {

  filas: Fila[] = [
    {id: 1, nome: 'Telefonia', ativo: true},
    {id: 2, nome: 'Computadores', ativo: false},
    {id: 3, nome: 'Redes', ativo: true},
    {id: 4, nome: 'Infra', ativo: true},
    {id: 5, nome: 'Cozinha', ativo: false}
  ];

  constructor() { }

  public getFilas(): Fila[] {
    return this.filas.filter((item) => item.ativo === true);
  }

  public adicionaFila(itemFila: Fila): void{
    itemFila.ativo = true;
    this.filas.push(itemFila);
  }

  nextId(): number{
    let id: number;
    id = this.filas.length + 1;
    return id;
  }
}
