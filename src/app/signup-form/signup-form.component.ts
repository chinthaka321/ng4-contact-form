import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { UserNameValidators } from 'app/signup-form/username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    partnerAccount: new FormGroup({
      username:new FormControl(''),
      password:new FormControl('')
    }),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3), 
      UserNameValidators.cannotContainSpace,
      UserNameValidators.cannotContainStar,
    ],UserNameValidators.shouldBeUnique,),
    password: new FormControl('', Validators.required)
  });

  get username() {
    return this.form.get('username');
  }

  get partnerAccountUsername() {
    return this.form.get('partnerAccount.username');
  }

  login() {  
    this.form.setErrors({
      invalidLogin:true
    });
  }
}
