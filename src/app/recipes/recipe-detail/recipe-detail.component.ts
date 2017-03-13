import {Component, OnInit, Input} from '@angular/core';
import {Recipe} from "../recipe";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";


@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styles: []
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe:Recipe;
  constructor(public sls:ShoppingListService) { }

  ngOnInit() {
  }
  addToShoppingList() {
    this.sls.addToShoppingList(this.selectedRecipe.ingredients)
  }
}
