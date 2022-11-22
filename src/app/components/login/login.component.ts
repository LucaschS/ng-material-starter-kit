import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  readonly loginForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });
  hide = true;

  constructor(private _loginService: LoginService) {
  }

  onProductFormSubmitted(productForm: FormGroup): void {
    this._loginService.create({
      username: productForm.get('username')?.value,
      password: productForm.get('password')?.value,
    }).subscribe();
  }
}
