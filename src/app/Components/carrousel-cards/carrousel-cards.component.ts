import { Component } from '@angular/core';
import { CardAnuncioComponent } from '../card-anuncio/card-anuncio.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrousel-cards',
  standalone: true,
  imports: [CardAnuncioComponent, CommonModule],
  templateUrl: './carrousel-cards.component.html',
  styleUrl: './carrousel-cards.component.scss'
})
export class CarrouselCardsComponent {

  items = [
    { titulo: 'Card 1', preco: 123 },
    { titulo: 'Card 2', preco: 213 },
    { titulo: 'Card 3', preco: 231 },
    { titulo: 'Card 4', preco: 313 },
    { titulo: 'Card 3', preco: 231 },
    { titulo: 'Card 3', preco: 231 },
    { titulo: 'Card 3', preco: 231 },
    { titulo: 'Card 3', preco: 231 },
    { titulo: 'Card 3', preco: 231 },
    { titulo: 'Card 3', preco: 231 },
  ];

  groupedItems: any[][] = [];

  constructor() {
    this.groupItems();
  }

  groupItems() {
    this.groupedItems = [];
    for (let i = 0; i < this.items.length; i += 5) {
      this.groupedItems.push(this.items.slice(i, i + 5));
    }
  }
}
