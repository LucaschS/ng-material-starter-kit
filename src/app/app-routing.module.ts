import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CryptoChipsComponent } from './components/crypto-chips/crypto-chips.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { CryptoChipsComponentModule } from './components/crypto-chips/crypto-chips.component-module';
import { CryptoChipsServiceModule } from './services/crypto-chips.service-module';
import { CategoriesListComponentModule } from './components/categories-list/categories-list.component-module';
import { CategoryServiceModule } from './services/category.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductListComponent }, { path: 'crypto', component: CryptoChipsComponent }, { path: 'categories', component: CategoriesListComponent }]), ProductListComponentModule, ProductServiceModule, CryptoChipsComponentModule, CryptoChipsServiceModule, CategoriesListComponentModule, CategoryServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
