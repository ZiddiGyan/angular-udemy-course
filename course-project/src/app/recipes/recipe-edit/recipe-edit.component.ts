import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  // recipeForm: FormGroup;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] !== null;
      }
    );
    //
    // this.recipeForm = new FormGroup({
    //   'recipeName': new FormControl(null, Validators.required),
    //   'recipeDescription': new FormControl(null, Validators.required),
    //   'recipeImageUrl': new FormControl(null),
    //   'recipeIngredients': new FormArray([], Validators.required)
    // })
  }
  //
  // addIngredient() {
  //   const control = new FormControl(null, Validators.required);
  //   // this must be casted or else you get an error
  //   (<FormArray>this.recipeForm.get('recipeIngredients')).push(control);
  // }
  //
  // onSubmit() {
  //   console.log(this.recipeForm.value);
  //   const value = this.recipeForm.value;
  //   const name = value['recipeName'];
  //   const description = value['recipeDescription'];
  //   const url = value['recipeImageUrl'];
  //   const ingredients = value['']
  //   const recipe = new Recipe()
  // }
}
