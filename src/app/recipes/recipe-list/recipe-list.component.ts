import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  // recipes: Array<Recipe> =  [
  //   new Recipe('A Test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
  //   new Recipe('A Tomato!', 'Healthy Tomatoes', 'https://cdn.pixabay.com/photo/2018/04/12/16/43/food-3314004_960_720.jpg'),
  //   new Recipe('Salsa Salad!', 'Refreshing Breakfast to keep you going!', 'https://www.maxpixel.net/static/photo/1x/Recipe-Dish-Home-Vegetarian-Food-Lunch-Nutrition-3889916.jpg'),
  // ];

  recipes: Array<Recipe>;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    console.log("RecipeListComponent loaded");
    this.recipes = this.recipeService.getRecipes();
  }

  // onRecipeSelected(recipe: Recipe) {
  //   this.recipeWasSelected.emit(recipe);
  // }

}
