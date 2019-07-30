import { Injectable } from '@angular/core';
import { Categoria } from './model/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  categorias: Categoria[] = [];

  constructor() { }

  public getCategorias(): Categoria[] {
    return this.categorias.filter((item) => item.ativo === true);
  }

  public adicionaCategoria(itemCategoria: Categoria): void {
    itemCategoria.ativo = true;
    this.categorias.push(itemCategoria);
  }

  nextId(): number{
    let id: number;
    id = this.categorias.length + 1;
    return id;
  }
}
