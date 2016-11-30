import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule } from './user.routing';

import { UserCmp } from './user.cmp';
import { SignupCmp, SignupApi } from './signup';
import { SigninCmp, SigninApi } from './signin';
import { SignoutCmp } from './signout';

@NgModule({
  declarations: [
    UserCmp,
    SignupCmp,
    SigninCmp,
    SignoutCmp
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
    UserRoutingModule
  ],
  providers: [
    SignupApi,
    SigninApi
  ]
})
export class UserModule {

}