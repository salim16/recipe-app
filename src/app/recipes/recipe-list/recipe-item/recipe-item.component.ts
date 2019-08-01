import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input('recipeItem') recipe: Recipe;
  @Input() index: number;
  // @Output() recipeSelected = new EventEmitter<void>();

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    console.log("RecipeItemComponent loaded...");
  }

  // onSelected() {
  //   // this.recipeSelected.emit();
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }

}
