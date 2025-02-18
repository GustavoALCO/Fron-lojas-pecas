import { Component } from '@angular/core';
import { NavbarComponent } from "../../Components/nav-bar/nav-bar.component";
import { NavbarShopComponent } from './navbar-shop/navbar-shop.component';
import { CardShopComponent } from "../../Components/card-shop/card-shop.component";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [NavbarShopComponent, CardShopComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {

}
