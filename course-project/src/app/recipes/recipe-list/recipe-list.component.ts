import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Microwaved Potato', 'Just microwave the potato',
      'http://www.dullmensclub.com/wp-content/uploads/Potato-3.jpg'),
    new Recipe('Ramen', 'Boil water and put it in',
               'http://wwmenslubcmw-onetulasotopg')
  ];

  @Output() recipeDetailEmitter = new EventEmitter<Recipe>();

  emitRecipeDetail(recipe: Recipe) {
    this.recipeDetailEmitter.emit(recipe)
  }
}
