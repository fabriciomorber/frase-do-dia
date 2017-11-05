import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public frase:string;
  public frases = new Array();
  private indice:number;


  constructor(public navCtrl: NavController) {

  }

  novaFrase() {
    this.indice = Math.random()*(this.frases.length);
    this.frases[0]="Se você traçar metas absurdamente altas e falhar, seu fracasso será muito melhor que o sucesso de todos";
    this.frases[1]="O sucesso normalmente vem para quem está ocupado demais para procurar por ele";
    this.frases[2]="Se você não está disposto a arriscar, esteja disposto a uma vida comum";
    this.frase = this.frases[parseInt(this.indice)];
  }

}
