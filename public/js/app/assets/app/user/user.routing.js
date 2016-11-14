var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserCmp } from './user.cmp';
import { SignupCmp } from './signup';
import { SigninCmp } from './signin';
import { SignoutCmp } from './signout';
var UserRoutingModule = (function () {
    function UserRoutingModule() {
    }
    return UserRoutingModule;
}());
UserRoutingModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forChild([
                { path: 'user', component: UserCmp, children: [
                        { path: '', redirectTo: 'signup', pathMatch: 'full' },
                        { path: 'signup', component: SignupCmp },
                        { path: 'signin', component: SigninCmp },
                        { path: 'signout', component: SignoutCmp }
                    ] }
            ])
        ],
        exports: [
            RouterModule
        ]
    }),
    __metadata("design:paramtypes", [])
], UserRoutingModule);
export { UserRoutingModule };
//# sourceMappingURL=user.routing.js.map