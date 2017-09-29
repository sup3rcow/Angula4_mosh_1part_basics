import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validatos';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace,
      UsernameValidators.isUsernameNotUnique
    ]),
    password: new FormControl('', Validators.required),
  });

  submit (x) {
    console.log(x);
  }

  // pomocu ovog propertija,
  // iz html-a *ngIf ima pristup username objektu,
  // pa ne moras tamo pisati form.get..
  get username () {
    return this.form.get('username');
  }
}