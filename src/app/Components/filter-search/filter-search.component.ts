
import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter-search',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatCheckboxModule,FormsModule, MatFormFieldModule, MatInputModule, CommonModule],
  templateUrl: './filter-search.component.html',
  styleUrl: './filter-search.component.scss'
})
export class FilterSearchComponent {
  marca: FormGroup;
  montadora: FormGroup;

  private readonly _formBuilder = inject(FormBuilder);

  montadoras = [
    'Chevrolet', 'Volkswagen', 'Fiat', 'Ford', 'Toyota',  
    'Honda', 'Hyundai', 'Renault', 'Peugeot', 'Citroën',  
    'Nissan', 'Mitsubishi', 'BMW', 'Mercedes-Benz', 'Audi',  
    'Jeep', 'Kia', 'Subaru', 'Volvo', 'Land Rover'
  ];

  marcas = [
    'Bosch', 'Magneti Marelli', 'NGK', 'Valeo', 'Delphi',
    'Hella', 'SKF', 'Mann Filter', 'Mahle', 'Cofap',
    'Monroe', 'TRW', 'Contitech', 'Gates', 'Fras-le',
    'ACDelco', 'Varga', 'Fremax', 'Metal Leve', 'Dayco'
  ];

  constructor(private fb: FormBuilder) {
    // Inicializa os checkboxes dinamicamente
    this.marca = this.fb.group(
      this.marcas.reduce((acc, marcas) => {
        acc[marcas] = false;
        return acc;
      }, {} as { [key: string]: boolean })
    );

    this.montadora = this.fb.group(
      this.montadoras.reduce((acc, montadoras) => {
        acc[montadoras] = false;
        return acc;
      }, {} as { [key: string]: boolean })
    );
  }
}
