import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignupApi } from './signup.api';
import { User } from '../user.interface';

import { Log, Level } from 'ng2-logger/ng2-logger';
const log = Log.create('SignupCmp()');
log.color = 'orange';

@Component({
  selector: 'user-signup',
  templateUrl: './signup.html'
})
export class SignupCmp {
  signupForm: FormGroup;

  constructor(private signupApi: SignupApi) {

  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]),
      password: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    const user = new User(
      this.signupForm.value.email,
      this.signupForm.value.password,
      this.signupForm.value.firstName,
      this.signupForm.value.lastName
    );

    this.signupApi
      .signup(user)
      .subscribe(
        data => {
          log.i('onSubmit() success', data);
          // let taskUpdated = this.tasks.filter(_task => _task.taskId === task.taskId);
          // if (taskUpdated.length === 0) {
          //   log.w('onSubmit() success->taskId incorrect');
          // } else {
          //   taskUpdated[0].name = task.name;
          // }
        },
        error => {
          // log.i('onSubmit() error', error);
        }
      );
    
    this.signupForm.reset();
  }
}