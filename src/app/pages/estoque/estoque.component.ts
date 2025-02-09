import { Component } from '@angular/core';
import { NavbarComponent } from "../../Components/nav-bar/nav-bar.component";
import { CardAnuncioComponent } from "../../Components/card-anuncio/card-anuncio.component";
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-estoque',
  standalone: true,
  imports: [NavbarComponent, CardAnuncioComponent],
  templateUrl: './estoque.component.html',
  styleUrl: './estoque.component.scss'
})
export class EstoqueComponent {
  isActive: boolean = false;
  

  activateLoading() {
    this.isActive = true;
  
    setTimeout(() => {
      this.isActive = false;
    }, 2000);
  }
}
