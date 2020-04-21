import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  // @Output('ingredientCreated') createdIngredient = new EventEmitter<Ingredient>();
  // @ViewChild('amountInput', {static: false}) amount: ElementRef;
  subscription: Subscription;
  editMode: boolean = false;
  editedIngredientIndex: number;
  editedIngredient: Ingredient;
  @ViewChild('f', {static: false}) slForm: NgForm;

  constructor(private shoppingListService: ShoppingListService) { }


  ngOnInit() {
    console.log("ShoppingEditComponent loaded..");
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedIngredientIndex = index;
        this.editedIngredient = this.shoppingListService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedIngredient.name,
          amount: this.editedIngredient.amount
        })
      }
    );
  }

  /*onAddIngredient(name: HTMLInputElement,) {
    const ingredient = new Ingredient(name.value, this.amount.nativeElement.value);
    // this.createdIngredient.emit(ingredient);
    this.shoppingListService.addIngredient(ingredient);
  } */

  onAddItem(form: NgForm) {
    const value = form.value;
    const ingredient = new Ingredient(value.name, value.amount);
    if(this.editMode) {
      this.shoppingListService.updateIngredient(this.editedIngredientIndex, ingredient);
    } else {
      this.shoppingListService.addIngredient(ingredient);
    }
    form.reset();
    this.editMode = false;
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
