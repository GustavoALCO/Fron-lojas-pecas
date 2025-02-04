import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SidebarComponent } from "./sidebar/sidebar.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, SidebarComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavbarComponent {
Model!:string
status = false
private readonly _router = inject(Router);

clickEvent() {
  this.status = !this.status;
  
}
}