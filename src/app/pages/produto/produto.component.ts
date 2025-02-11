import { Component } from '@angular/core';
import { NavbarComponent } from "../../Components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.scss'
})
export class ProdutoComponent {

}
