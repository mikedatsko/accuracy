import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';
import { UserModule } from './user';

import { AppCmp } from './app.cmp';
import { TaskModule } from './task';
import { HomeCmp } from './home';

@NgModule({
  declarations: [
    AppCmp,
    HomeCmp
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,

    UserModule,
    TaskModule
  ],
  bootstrap: [ AppCmp ]
})
export class AppModule {

}