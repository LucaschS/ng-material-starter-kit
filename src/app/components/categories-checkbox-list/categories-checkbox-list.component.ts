import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {Observable} from "rxjs";
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-categories-checkbox-list',
  styleUrls: ['./categories-checkbox-list.component.scss'],
  templateUrl: './categories-checkbox-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesCheckboxListComponent {
  constructor(private _categoryService: CategoryService) {
  }
  readonly list$: Observable<ProductModel[]> = this._categoryService.getAllCategories();
}
