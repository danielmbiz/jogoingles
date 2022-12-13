import { Component, EventEmitter, Output } from '@angular/core'

import { Frase } from '../shared/frase.model'
import { FRASES } from "./frases-mock"

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase:'
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase!: Frase
  public progresso: number = 0
  public tentativas: number = 3

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() {
    this.incrementaRodada()
  }

  public atualizaResposta(reposta: Event): void {
    this.resposta = (<HTMLInputElement>reposta.target).value
  }

  public verificaResposta(): void {
    if (this.rodadaFrase.frasePtbr == this.resposta) {
      this.rodada++;
      this.progresso = (this.rodada / this.frases.length) * 100
      
      if (this.rodada == this.frases.length) {
        this.encerrarJogo.emit('vitoria')
      }
    }
    else {
      this.tentativas--;
      if (this.tentativas < 0)
      this.encerrarJogo.emit('derrota')
    }
    this.incrementaRodada()
  }

  public incrementaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada]
    this.resposta = ''
  }

}
