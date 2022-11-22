import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {RegisterService} from "../../services/register.service";

@Component({
  selector: 'app-register',
  styleUrls: ['./register.component.scss'],
  templateUrl: './register.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent {
  constructor(private _registerService: RegisterService) {
  }

  readonly productForm: FormGroup = new FormGroup({
    email: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    firstname: new FormControl(),
    lastname: new FormControl(),
    city: new FormControl(),
    street: new FormControl(),
    number: new FormControl(),
    zipcode: new FormControl(),
    phone: new FormControl(),
  });

  onProductFormSubmitted(productForm: FormGroup): void {
    this._registerService.create({
      address: {
        city: productForm.get('city')?.value,
        number: productForm.get('number')?.value,
        street: productForm.get('street')?.value,
        zipcode: productForm.get('zipcode')?.value
      },
      email: productForm.get('email')?.value,
      username: productForm.get('username')?.value,
      password: productForm.get('password')?.value,
      name: {
        firstname: productForm.get('firstname')?.value,
        lastname: productForm.get('lastname')?.value,
      },

      // city: productForm.get('city')?.value,
      // street: productForm.get('street')?.value,
      // number: productForm.get('number')?.value,
      // zipcode: productForm.get('zipcode')?.value,
      phone: productForm.get('phone')?.value
    }).subscribe();
  }
}
