import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { CryptoChipsComponent } from './crypto-chips.component';
import {MatCardModule} from "@angular/material/card";

@NgModule({
  imports: [MatChipsModule, CommonModule, MatCardModule],
  declarations: [CryptoChipsComponent],
  providers: [],
  exports: [CryptoChipsComponent]
})
export class CryptoChipsComponentModule {
}
