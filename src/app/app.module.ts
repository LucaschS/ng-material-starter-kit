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
import {
  CategoriesCheckboxListComponentModule
} from "./components/categories-checkbox-list/categories-checkbox-list.component-module";
import {CategoriesMenuComponentModule} from "./components/categories-menu/categories-menu.component-module";
import {ProductFormComponentModule} from "./components/product-form/product-form.component-module";
import {EmployeeFormComponentModule} from "./components/employee-form/employee-form.component-module";
import {LoginComponentModule} from "./components/login/login.component-module";
import {RegisterComponentModule} from "./components/register/register.component-module";



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
        PublicHolidayComponentModule,
        CategoriesCheckboxListComponentModule,
        CategoriesMenuComponentModule,
        ProductFormComponentModule,
        EmployeeFormComponentModule,
        LoginComponentModule,
        RegisterComponentModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
