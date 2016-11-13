import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeCmp } from './home';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeCmp }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}