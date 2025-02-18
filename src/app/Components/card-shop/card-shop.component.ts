import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-shop',
  standalone: true,
  imports: [],
  templateUrl: './card-shop.component.html',
  styleUrl: './card-shop.component.scss'
})
export class CardShopComponent {
  @Input()
  preco:number = 231;

  @Input()
  valor!:number

  contador:number = 1

  adicionar(){
    if(this.contador < 10){
    this.contador ++
    this.preco += this.valor
    }
  }

  subtrair(){
    this.contador --
    this.preco -= this.valor
    
  }
}
