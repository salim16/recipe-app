import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  // providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  // ingredients: Array<Ingredient> = [
  //   new Ingredient('Apples', 5),
  //   new Ingredient('Tomatoes', 10)
  // ];

  ingredients: Array<Ingredient>;
  private ingredientsSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    console.log("ShoppingListComponent loaded..");
    this.ingredients = this.shoppingListService.getIngredients();
    // this.shoppingListService.addIngList.subscribe(
    //   (ingredient: Ingredient) => {
    //     this.ingredients.push(ingredient);
    //   }
    // );
    this.ingredientsSubscription = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients : Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  // onIngredientCreated(ingredient: Ingredient) {
  //   this.ingredients.push(ingredient);
  // }

  ngOnDestroy(): void {
    this.ingredientsSubscription.unsubscribe();
  }

}
