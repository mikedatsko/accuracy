import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'user-signout',
  template: `
    <div class="col-md-8 col-md-offset-2">
      <button class="btn btn-danger" (click)="onSignout()">Sign out</button>
    </div>
  `
})
export class SignoutCmp {
  constructor(private router: Router) {

  }

  onSignout() {
    localStorage.clear();
    this.router.navigateByUrl('/user/signin');
  }
}