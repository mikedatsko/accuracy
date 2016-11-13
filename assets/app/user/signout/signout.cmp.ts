import { Component } from "@angular/core";

@Component({
  selector: 'user-signout',
  template: `
    <div class="col-md-8 col-md-offset-2">
      <button class="btn btn-danger" (click)="onSignout()">Sign out</button>
    </div>
  `
})
export class SignoutCmp {
  onSignout() {

  }
}