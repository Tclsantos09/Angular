import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  categoriaLivro: string;
  idLivro: string;
  categorias = [
  ];

  constructor() { }

  ngOnInit() {
  }
  adicionarCategoria(){
    this.categorias.push({
      id: this.idLivro, nome: this.categoriaLivro
    });
  }

}
