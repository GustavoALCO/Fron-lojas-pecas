import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-anuncio',
  standalone: true,
  imports: [],
  templateUrl: './card-anuncio.component.html',
  styleUrl: './card-anuncio.component.scss'
})
export class CardAnuncioComponent {

  @Input()
  Titulo!:string;

  @Input()
  preco!:number;

  valor!:string

  precoParcela!:any;

  parcelas!:number

  valorParcela() {
    switch (true) {
        case this.preco >= 1 && this.preco <= 50:
            this.parcelas = 1;
            return this.precoParcela = this.preco;
        case this.preco >= 51 && this.preco <= 100:
            this.parcelas = 2;
            return this.precoParcela = this.preco / this.parcelas;
        case this.preco >= 101 && this.preco <= 300:
            this.parcelas = 3;
            return this.precoParcela = this.preco / this.parcelas;
        case this.preco >= 301 && this.preco <= 700:
            this.parcelas = 4;
            return this.precoParcela = this.preco / this.parcelas;
        case this.preco >= 701:
            this.parcelas = 5; 
            return this.precoParcela = this.preco / this.parcelas;
        default:
            this.precoParcela = this.preco; 
            return this.precoParcela; // Adicionando return aqui
    }
}


formatarValor(){
    this.valor = (this.preco * 1).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    this.precoParcela = (this.precoParcela * 1).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

ngOnInit():void {
  this.valorParcela();
  this.formatarValor();
}
}
