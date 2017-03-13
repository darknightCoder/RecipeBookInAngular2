import { Injectable } from '@angular/core';
import {Ingredients} from "../shared/ingredients";

@Injectable()
export class ShoppingListService {
  private ingredients:Ingredients[]=[];

  constructor() { }

  getIngredients() {
    return this.ingredients;
  }
  addToShoppingList(ingredients:Ingredients[]) {
    Array.prototype.push.apply(this.ingredients,ingredients);
  }

}
