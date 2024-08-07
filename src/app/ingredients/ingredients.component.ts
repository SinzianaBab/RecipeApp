import {Component, Input} from '@angular/core';
import {Ingredient} from "../ingredient";

@Component({
  selector: 'app-ingredients',
  standalone: true,
  imports: [],
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.css'
})
export class IngredientsComponent {
@Input() ingredient!: Ingredient;
}
