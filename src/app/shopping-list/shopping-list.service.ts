import { Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {

    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    //ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Array<Ingredient> = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    // @Output() addIngList = new EventEmitter<Ingredient>();

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        //this.ingredientsChanged.emit(this.ingredients.slice());
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // using for loop we get to many emissions means to many event emitters
        // for(let ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // }
        // es6 syntax to directly add all ingredients at once into the array. 
        this.ingredients.push(...ingredients); // spread operator
        //this.ingredientsChanged.emit(this.ingredients.slice());
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}