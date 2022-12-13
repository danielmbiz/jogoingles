export class Vida {
    constructor(
        public vida: boolean,
        public urlVida: string = './assets/coracao_cheio.png',
        public urlSemVida: string = './assets/coracao_vazio.png') { }

        public exibeVida(): string {
            if (this.vida) {
                return this.urlVida
            }
            else {
                return this.urlSemVida
            }
        }
}