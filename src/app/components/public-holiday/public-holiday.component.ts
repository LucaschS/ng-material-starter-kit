import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable} from "rxjs";
import {PublicHolidayService} from "../../services/public-holiday.service";
import {PublicHolidaysModel} from "../../models/public-holidays.model";

@Component({
  selector: 'app-public-holiday',
  styleUrls: ['./public-holiday.component.scss'],
  templateUrl: './public-holiday.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicHolidayComponent {
  constructor(private _holidayService: PublicHolidayService) {
  }
  readonly list$: Observable<PublicHolidaysModel[]> = this._holidayService.getAll();
}
