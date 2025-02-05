import { Component } from '@angular/core';
import { NavbarComponent } from "../../Components/nav-bar/nav-bar.component";
import { CarouselComponent } from "../../Components/carousel/carousel.component";
import { CardAnuncioComponent } from "../../Components/card-anuncio/card-anuncio.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CarouselComponent, CardAnuncioComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
