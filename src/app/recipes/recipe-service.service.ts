import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredients} from "../shared/ingredients";

@Injectable()
export class RecipeServiceService {
  private recipes:Recipe[] = [
    new Recipe('Alpino','spanish dish','http://alicethecook.com/wp-content/uploads/2009/11/Ren-food-2.jpg',[new Ingredients('paneer rice',2)]),
    new Recipe('Pizzano','italian dish','http://alicethecook.com/wp-content/uploads/2009/10/Finished-dish-a-070109-300x200.jpg',[new Ingredients('manchurial',1)])
  ];


  constructor() { }

  getRecipes() {
    return this.recipes;
  }

}
