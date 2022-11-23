import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AgePredictionComponent } from './age-prediction.component';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [MatCardModule, CommonModule],
  declarations: [AgePredictionComponent],
  providers: [],
  exports: [AgePredictionComponent]
})
export class AgePredictionComponentModule {
}
