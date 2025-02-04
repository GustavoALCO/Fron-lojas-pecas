import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContatosComponent } from "./pages/contatos/contatos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContatosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Loja De Ferramentas';
}
