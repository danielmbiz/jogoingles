import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Vida } from '../shared/vida.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  public coracaoVazio: string = './assets/coracao_vazio.png';
  public coracaoCheio: string = './assets/coracao_cheio.png';
  @Input() public tentativas: number = 0;

  public vidas: Vida[] = [
    new Vida(true), new Vida(true), new Vida(true)
  ]

  constructor() {

  }

  ngOnInit(): void {

  }

  ngOnChanges() {
    if (this.vidas.length != this.tentativas) {
      let indice = this.vidas.length - this.tentativas
      this.vidas[indice - 1].vida = false
    }

  }
}
