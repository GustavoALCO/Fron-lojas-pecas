import { Component, inject } from '@angular/core';
import { NavbarComponent } from "../../Components/nav-bar/nav-bar.component";
import { CardAnuncioComponent } from "../../Components/card-anuncio/card-anuncio.component";
import {
  MatDialog,
} from '@angular/material/dialog';
import { FilterSearchComponent } from '../../Components/filter-search/filter-search.component';

@Component({
  selector: 'app-estoque',
  standalone: true,
  imports: [NavbarComponent, CardAnuncioComponent, ],
  templateUrl: './estoque.component.html',
  styleUrl: './estoque.component.scss'
})
export class EstoqueComponent {
  isActive: boolean = false;
  
  dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(FilterSearchComponent,{
      width: "350px",
      height: "700px",
      exitAnimationDuration: "0.3s",
      
      
    })
}

  activateLoading() {
    this.isActive = true;
  
    setTimeout(() => {
      this.isActive = false;
    }, 2000);
  }
}
