import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CryptoChipsComponent } from './components/crypto-chips/crypto-chips.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { PublicHolidayComponent } from './components/public-holiday/public-holiday.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { CryptoChipsComponentModule } from './components/crypto-chips/crypto-chips.component-module';
import { CryptoChipsServiceModule } from './services/crypto-chips.service-module';
import { CategoriesListComponentModule } from './components/categories-list/categories-list.component-module';
import { CategoryServiceModule } from './services/category.service-module';
import { PublicHolidayComponentModule } from './components/public-holiday/public-holiday.component-module';
import { PublicHolidayServiceModule } from './services/public-holiday.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductListComponent }, { path: 'crypto', component: CryptoChipsComponent }, { path: 'categories', component: CategoriesListComponent }, { path: 'holiday', component: PublicHolidayComponent }]), ProductListComponentModule, ProductServiceModule, CryptoChipsComponentModule, CryptoChipsServiceModule, CategoriesListComponentModule, CategoryServiceModule, PublicHolidayComponentModule, PublicHolidayServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
