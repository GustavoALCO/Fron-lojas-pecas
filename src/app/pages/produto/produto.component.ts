import { Component, inject } from '@angular/core';
import { NavbarComponent } from "../../Components/nav-bar/nav-bar.component";
import { MatDialog } from '@angular/material/dialog';
import { FilterSearchComponent } from '../../Components/filter-search/filter-search.component';
import { CarrouselImagesComponent } from '../../Components/carrousel-images/carrousel-images.component';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.scss'
})
export class ProdutoComponent {

  isActive: boolean = false;
    
  dialog = inject(MatDialog);

   images = [
    'https://files.oaiusercontent.com/file-57qrYynXNrkQUefCUpyqf4?se=2025-02-13T19%3A46%3A05Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3De4ed6028-2847-4b21-a8b1-f992404071cf.webp&sig=0PUjvb6re3XoVQMYOYXGoWtURwSS3XgMtI4YLD75FV8%3D',
    'https://files.oaiusercontent.com/file-57qrYynXNrkQUefCUpyqf4?se=2025-02-13T19%3A46%3A05Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3De4ed6028-2847-4b21-a8b1-f992404071cf.webp&sig=0PUjvb6re3XoVQMYOYXGoWtURwSS3XgMtI4YLD75FV8%3D',
    'https://files.oaiusercontent.com/file-EtK6kjNEpqvTpZWWAXxn7T?se=2025-02-13T19%3A56%3A54Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D9684a3fe-b5e8-402d-8333-48a2a84f972f.webp&sig=ZDPeSSMEgr6zbEcl8EAcNJlgYu4IYzy5%2Bf8qXNLX20A%3D',
   ]
    
   openDialog() :void{
    this.dialog.open(CarrouselImagesComponent, {
      width: '80vw',
      height: 'auto',   
      maxWidth: '750px',

      data: {images : this.images}
    });
  }

}
