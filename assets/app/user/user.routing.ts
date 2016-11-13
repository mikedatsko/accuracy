import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UserCmp } from './user.cmp';
import { SignupCmp } from './signup';
import { SigninCmp } from './signin';
import { SignoutCmp } from './signout';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'user', component: UserCmp, children: [
        { path: '', redirectTo: 'signup', pathMatch: 'full' },
        { path: 'signup', component: SignupCmp },
        { path: 'signin', component: SigninCmp },
        { path: 'signout', component: SignoutCmp }
      ]}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule {}