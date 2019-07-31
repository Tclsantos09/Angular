import { Component, OnInit } from '@angular/core';
import { ChamadosService } from '../chamados.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chamados',
  templateUrl: './chamados.component.html',
  styleUrls: ['./chamados.component.scss']
})
export class ChamadosComponent implements OnInit {

  constructor(private chamados: ChamadosService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let id_categoria = this.route.snapshot.params['id'];
  }

  public leiaDosChamados(){
    let id_categoria = this.route.snapshot.params['id'];
    // com o + a string vira number
    return this.chamados.getChamados(+id_categoria);
  }

}
