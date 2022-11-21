import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CategoriesCheckboxListComponent } from './categories-checkbox-list.component';
import {MatCardModule} from "@angular/material/card";

@NgModule({
  imports: [MatCheckboxModule, CommonModule, MatCardModule],
  declarations: [CategoriesCheckboxListComponent],
  providers: [],
  exports: [CategoriesCheckboxListComponent]
})
export class CategoriesCheckboxListComponentModule {
}
