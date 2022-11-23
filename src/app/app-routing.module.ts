import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';
import {CatFactsComponent} from './components/cat-facts/cat-facts.component';
import {AgePredictionComponent} from './components/age-prediction/age-prediction.component';
import {ProductDetailComponentModule} from './components/product-detail/product-detail.component-module';
import {ProductServiceModule} from './services/product.service-module';
import {CatFactsComponentModule} from './components/cat-facts/cat-facts.component-module';
import {CatFactsServiceModule} from './services/cat-facts.service-module';
import {AgePredictionComponentModule} from './components/age-prediction/age-prediction.component-module';
import {AgePredictionServiceModule} from './services/age-prediction.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{path: 'product/:id', component: ProductDetailComponent}, {
    path: 'cat-facts',
    component: CatFactsComponent
  }, {
    path: 'age/:name',
    component: AgePredictionComponent
  }]), ProductDetailComponentModule, ProductServiceModule, CatFactsComponentModule, CatFactsServiceModule, AgePredictionComponentModule, AgePredictionServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
