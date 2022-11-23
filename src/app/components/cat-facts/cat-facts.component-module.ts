import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CatFactsComponent } from './cat-facts.component';

@NgModule({
  imports: [CommonModule, MatCardModule],
  declarations: [CatFactsComponent],
  providers: [],
  exports: [CatFactsComponent]
})
export class CatFactsComponentModule {
}
