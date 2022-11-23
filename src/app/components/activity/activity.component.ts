import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable} from "rxjs";
import {switchMap} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";
import {ActivityService} from "../../services/activity.service";
import {ActivityModel} from "../../models/activity.model";

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivityComponent {
  readonly activityData$: Observable<ActivityModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._activityService.getOne(data['type'])));

  constructor(private _activatedRoute: ActivatedRoute, private _activityService: ActivityService) {
  }
}
