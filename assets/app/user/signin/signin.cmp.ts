import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SigninApi } from './signin.api';
import { User } from '../user.interface';

import { Log, Level } from 'ng2-logger/ng2-logger';
const log = Log.create('SigninCmp()');
log.color = 'orange';

@Component({
  selector: 'user-signin',
  templateUrl: './signin.html'
})
export class SigninCmp {
  signinForm: FormGroup;

  constructor(private signinApi: SigninApi, private router: Router) {

  }

  onSubmit() {
    console.log(this.signinForm);
    const user = new User(
      this.signinForm.value.email,
      this.signinForm.value.password
    );

    this.signinApi
      .signin(user)
      .subscribe(
        data => {
          log.i('onSubmit() success', data);
          localStorage.setItem('token', data.token);
          localStorage.setItem('userId', data.userId);
          this.router.navigateByUrl('/');
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
    
    this.signinForm.reset();
  }

  ngOnInit() {
    this.signinForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]),
      password: new FormControl(null, Validators.required)
    });
  }
}