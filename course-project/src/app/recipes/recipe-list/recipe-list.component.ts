import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Microwaved Potato', 'Just microwave the potato',
      'http://www.dullmensclub.com/wp-content/uploads/Potato-3.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
