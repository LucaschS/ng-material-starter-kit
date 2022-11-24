import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';
import {CatFactsComponent} from './components/cat-facts/cat-facts.component';
import {AgePredictionComponent} from './components/age-prediction/age-prediction.component';
import {CartComponent} from './components/cart/cart.component';
import {UserComponent} from './components/user/user.component';
import {ActivityComponent} from './components/activity/activity.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductDetailComponentModule} from './components/product-detail/product-detail.component-module';
import {ProductServiceModule} from './services/product.service-module';
import {CatFactsComponentModule} from './components/cat-facts/cat-facts.component-module';
import {CatFactsServiceModule} from './services/cat-facts.service-module';
import {AgePredictionComponentModule} from './components/age-prediction/age-prediction.component-module';
import {AgePredictionServiceModule} from './services/age-prediction.service-module';
import {CartComponentModule} from './components/cart/cart.component-module';
import {CartServiceModule} from './services/cart.service-module';
import {UserComponentModule} from './components/user/user.component-module';
import {UserServiceModule} from './services/user.service-module';
import {ActivityComponentModule} from './components/activity/activity.component-module';
import {ActivityServiceModule} from './services/activity.service-module';
import {ProductListComponentModule} from './components/product-list/product-list.component-module';
import {ProductsServiceModule} from './services/products.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{path: 'product/:id', component: ProductDetailComponent}, {
    path: 'cat-facts',
    component: CatFactsComponent
  }, {path: 'age/:name', component: AgePredictionComponent}, {
    path: 'cart/:id',
    component: CartComponent
  }, {path: 'user/:id', component: UserComponent}, {
    path: 'activity/:type',
    component: ActivityComponent
  }, {
    path: 'productList',
    component: ProductListComponent
  }]), ProductDetailComponentModule, ProductServiceModule, CatFactsComponentModule, CatFactsServiceModule, AgePredictionComponentModule, AgePredictionServiceModule, CartComponentModule, CartServiceModule, UserComponentModule, UserServiceModule, ActivityComponentModule, ActivityServiceModule, ProductListComponentModule, ProductsServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
