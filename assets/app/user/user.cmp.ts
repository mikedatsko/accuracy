import { Component } from "@angular/core";

@Component({
    selector: 'user',
    template: `
        <h2>User</h2>
        <div class="row spacing">
            <nav>
                <ul class="nav nav-tabs">
                    <li routerLinkActive="active"><a routerLink="signup">Signup</a></li>
                    <li routerLinkActive="active"><a routerLink="signin">Signin</a></li>
                    <li routerLinkActive="active"><a routerLink="signout">Signout</a></li>
                </ul>
            </nav>
        </div>
        <div class="row spacing">
           <router-outlet></router-outlet>
        </div>
    `
})
export class UserCmp {

}