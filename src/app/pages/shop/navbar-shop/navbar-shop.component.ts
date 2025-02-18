import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-navbar-shop',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar-shop.component.html',
  styleUrl: './navbar-shop.component.scss'
})
export class NavbarShopComponent {
  status = false
  private readonly _router = inject(Router);
  
  clickEvent() {
    this.status = !this.status;
    
  }
}
