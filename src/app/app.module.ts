import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import {ProductDetailComponentModule} from "./components/product-detail/product-detail.component-module";
import {CatFactsComponentModule} from "./components/cat-facts/cat-facts.component-module";
import {AgePredictionComponentModule} from "./components/age-prediction/age-prediction.component-module";




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ProductDetailComponentModule,
    CatFactsComponentModule,
    AgePredictionComponentModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
