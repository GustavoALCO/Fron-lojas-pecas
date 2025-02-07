import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-derp',
  standalone: true,
  imports: [],
  templateUrl: './card-derp.component.html',
  styleUrl: './card-derp.component.scss'
})
export class CardDerpComponent {
@Input()
Link!:string

@Input()
img!:string

@Input()
Derp!:string

}
