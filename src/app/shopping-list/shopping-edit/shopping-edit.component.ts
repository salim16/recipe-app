import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  // ingredient: Ingredient;
  // @Output('ingredientCreated') createdIngredient = new EventEmitter<Ingredient>();
  @ViewChild('amountInput', {static: false}) amount: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    console.log("ShoppingEditComponent loaded..");
  }

  onAddIngredient(name: HTMLInputElement,) {
    // this.ingredient = new Ingredient(name.value, this.amount.nativeElement.value);
    const ingredient = new Ingredient(name.value, this.amount.nativeElement.value);
    // this.shoppingListService.addIngList.emit(ingredient);
    this.shoppingListService.addIngredient(ingredient);
  }

}
