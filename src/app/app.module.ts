import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import {ProductListComponentModule} from "./components/product-list/product-list.component-module";
import {CategoriesListComponentModule} from "./components/categories-list/categories-list.component-module";
import {CryptoChipsComponentModule} from "./components/crypto-chips/crypto-chips.component-module";
import {PublicHolidayComponentModule} from "./components/public-holiday/public-holiday.component-module";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ProductListComponentModule,
    CategoriesListComponentModule,
    CryptoChipsComponentModule,
    PublicHolidayComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
