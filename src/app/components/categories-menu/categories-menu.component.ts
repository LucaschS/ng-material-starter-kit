import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {Observable} from "rxjs";
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-categories-menu',
  styleUrls: ['./categories-menu.component.scss'],
  templateUrl: './categories-menu.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesMenuComponent {
  constructor(private _categoryService: CategoryService) {
  }
  readonly list$: Observable<ProductModel[]> = this._categoryService.getAllCategories();
}
