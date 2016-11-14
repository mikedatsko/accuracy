var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
var UserCmp = (function () {
    function UserCmp() {
    }
    return UserCmp;
}());
UserCmp = __decorate([
    Component({
        selector: 'user',
        template: "\n        <h2>User</h2>\n        <div class=\"row spacing\">\n            <nav>\n                <ul class=\"nav nav-tabs\">\n                    <li routerLinkActive=\"active\"><a routerLink=\"signup\">Signup</a></li>\n                    <li routerLinkActive=\"active\"><a routerLink=\"signin\">Signin</a></li>\n                    <li routerLinkActive=\"active\"><a routerLink=\"signout\">Signout</a></li>\n                </ul>\n            </nav>\n        </div>\n        <div class=\"row spacing\">\n           <router-outlet></router-outlet>\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [])
], UserCmp);
export { UserCmp };
//# sourceMappingURL=user.cmp.js.map