import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from '../recipe'
import {RecipeServiceService} from "../recipe-service.service";
@Component({
  selector: 'rb-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes:Recipe[]=[];
  @Output() onSelectedRecipe = new EventEmitter<Recipe>();
 // recipe =

  constructor(public recipeService:RecipeServiceService) { }

  ngOnInit() {
    this.recipes=this.recipeService.getRecipes();
  }
  getRecipeDetail(recipe:Recipe){
      this.onSelectedRecipe.emit(recipe);
  }

}
