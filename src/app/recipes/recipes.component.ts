import {Component, inject} from '@angular/core';
import {IngredientsComponent} from "../ingredients/ingredients.component";
import {NgForOf} from "@angular/common";
import {CookingService} from "../cooking.service";
import {Ingredient} from "../ingredient";

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [IngredientsComponent, NgForOf],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {
ingredients: Ingredient[]=[];
cookingService: CookingService = inject(CookingService)


  constructor() {
  this.ingredients = this.cookingService.getAllIngredients();
  }
}
