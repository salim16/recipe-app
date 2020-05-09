import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

import { map, tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DataStorageService {

    constructor(private http: HttpClient, private recipeService: RecipeService) {}

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http.put(
            'https://ng-course-recipe-book-1ce78.firebaseio.com/recipes.json',
            recipes
        ).subscribe(response => {
            console.log(response);
        })
    }

    fetchRecipes() {
        // transforming the data before subscribing 
        // this was important because when we have no ingredients at the back then a javascript 
        // recipe object without ingredients defined is sent from back.
        // so we transform the response by adding empty ingredientd to it before subscribing

        // Now first map is a rxjs operator 
        // and second is a method on the array object of javascript
        return this.http.get<Recipe[]>
            ('https://ng-course-recipe-book-1ce78.firebaseio.com/recipes.json')
            .pipe(
                map(recipes => {
                    return recipes.map(recipe => {
                       return {
                           ...recipe,
                           ingredients: recipe.ingredients? recipe.ingredients : []
                       };
                    });
                }),
                tap(recipes => {
                    this.recipeService.setRecipes(recipes);
                    // tap operator allows us to execute some code here without altering
                    // the data which is bundled with the observable
                })
            )
            // .subscribe(recipes => { // not subscribing here anymore after using resolver
            //     console.log(recipes);
            //     this.recipeService.setRecipes(recipes);
            // })
        }

}