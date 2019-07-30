import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilasService {

  filas = [
    {id: 1, nome: 'Telefonia'},
    {id: 2, nome: 'Computadores'},
    {id: 3, nome: 'Redes'},
    {id: 4, nome: 'Infra'},
    {id: 5, nome: 'Cozinha'},
  ];

  constructor() { }

  public getFilas(){
    return this.filas;
  }
}
