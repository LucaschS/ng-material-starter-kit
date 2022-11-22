import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {EmployeeService} from "../../services/employee.service";

@Component({
  selector: 'app-employee-form',
  styleUrls: ['./employee-form.component.scss'],
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent {
  constructor(private _employeeService: EmployeeService) {
  }
  readonly employeeForm: FormGroup = new FormGroup({
    name: new FormControl(),
    age: new FormControl(),
    salary: new FormControl()
  });
  onProductFormSubmitted(employeeForm: FormGroup): void {
    this._employeeService.create({
      name: employeeForm.get('name')?.value,
      age: employeeForm.get('age')?.value,
      salary: employeeForm.get('salary')?.value,
    }).subscribe();
  }
}
