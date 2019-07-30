import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.scss']
})
export class BotaoComponent implements OnInit {
  texto = 'Clique aqui';
  msgDoAlert= "Minha mensagem qualquer";
  constructor() { }

  ngOnInit() {
   
  }

  exibeMensagem(){
    alert(this.msgDoAlert);
  }

}
