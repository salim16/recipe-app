import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    collapsed = true;

    constructor(private dataStorageService: DataStorageService){}

    // @Output() featureSelected = new EventEmitter<string>();

    // onSelect(feature: string) {
    //     this.featureSelected.emit(feature);
    // }

    onSaveData(){
        this.dataStorageService.storeRecipes();
    }

    onFetchRecipe() {
        this.dataStorageService.fetchRecipes();
    }

}