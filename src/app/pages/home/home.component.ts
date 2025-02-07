import { Component } from '@angular/core';
import { NavbarComponent } from "../../Components/nav-bar/nav-bar.component";
import { CarouselComponent } from "../../Components/carousel/carousel.component";
import { CardAnuncioComponent } from "../../Components/card-anuncio/card-anuncio.component";
import { CarrouselCardsComponent } from "../../Components/carrousel-cards/carrousel-cards.component";
import { CardDerpComponent } from "../../Components/card-derp/card-derp.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CarouselComponent, CardAnuncioComponent, CarrouselCardsComponent, CardDerpComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
