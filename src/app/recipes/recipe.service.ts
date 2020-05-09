import { Subject } from 'rxjs';
import { Output, EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

export class RecipeService {
    
    // recipeSelected = new Subject<Recipe>();

    constructor(private shoppingListService: ShoppingListService) {}
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Array<Recipe> =  [
        new Recipe(
            'Tasty Schnitzel',
            'A super-tasty Schnitzel - just awesome!', 
            'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'Big Fat Burger', 
            'What else you need to say?', 
            'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ]),
        new Recipe(
            'Salsa Salad!', 
            'Refreshing Breakfast to keep you going!', 
            'https://storage.needpix.com/rsynced_images/recipes-2920072_1280.jpg',
            []),
    ];

    // returns clone of recipes array
    // slice only returns shallow copy
    getRecipes() {
       return this.recipes.slice();
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    getRecipe(id: number): Recipe {
        return this.recipes[id];
    }

    
    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

}