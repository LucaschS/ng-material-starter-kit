import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { PublicHolidayComponent } from './public-holiday.component';

@NgModule({
  imports: [MatButtonModule, MatMenuModule, CommonModule, MatFormFieldModule, MatSelectModule, MatOptionModule],
  declarations: [PublicHolidayComponent],
  providers: [],
  exports: [PublicHolidayComponent]
})
export class PublicHolidayComponentModule {
}
