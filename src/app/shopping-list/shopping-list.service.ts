import { Ingredient } from '../shared/ingredient.model';
import { Output, EventEmitter } from '@angular/core';

export class ShoppingListService {

    @Output() ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Array<Ingredient> = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    // @Output() addIngList = new EventEmitter<Ingredient>();

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

}