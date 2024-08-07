import { Injectable } from '@angular/core';
import {Ingredient} from "./ingredient";

@Injectable({
  providedIn: 'root'
})
export class CookingService {

  constructor() { }

  ingredients: Ingredient[]=[{
    id:1,
    name: 'oil',
    quantity: 0.5,
    unitType: 'ml',
  },
    {
      id:2,
      name: 'water',
      quantity: 2,
      unitType: 'ml',
    },
    {
      id:3,
      name: 'milk',
      quantity: 1,
      unitType: 'ml',
    }
  ]

  getAllIngredients(): Ingredient[]{
    return this.ingredients;
  }

  getIngredientById(id: number): Ingredient | undefined{
    return this.ingredients.find(ingredient => ingredient.id === id);
  }
}
