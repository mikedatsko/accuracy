import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'user',
  template: `
    <h2>User</h2>
    <div class="row spacing">
      <nav>
        <ul class="nav nav-tabs">
          <li routerLinkActive="active" *ngIf="!isLoggedIn()"><a routerLink="signup">Signup</a></li>
          <li routerLinkActive="active" *ngIf="!isLoggedIn()"><a routerLink="signin">Signin</a></li>
          <li routerLinkActive="active" *ngIf="isLoggedIn()"><a routerLink="signout">Signout</a></li>
        </ul>
      </nav>
    </div>
    <div class="row spacing">
       <router-outlet></router-outlet>
    </div>
  `
})
export class UserCmp {
  constructor(private router: Router) {}

  ngOnInit() {
    if (this.isLoggedIn()) {
      this.router.navigateByUrl('/user/signout');
    }
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }
}