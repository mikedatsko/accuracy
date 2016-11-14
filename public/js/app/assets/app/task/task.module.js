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
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskRoutingModule } from './task.routing';
import { TaskCmp } from './task.cmp';
import { TasksListCmp, TasksListApi } from './tasks-list';
import { AddTaskCmp, AddTaskApi } from './add-task';
var TaskModule = (function () {
    function TaskModule() {
    }
    return TaskModule;
}());
TaskModule = __decorate([
    NgModule({
        declarations: [
            TaskCmp,
            TasksListCmp,
            AddTaskCmp
        ],
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            TaskRoutingModule
        ],
        providers: [AddTaskApi, TasksListApi]
    }),
    __metadata("design:paramtypes", [])
], TaskModule);
export { TaskModule };
//# sourceMappingURL=task.module.js.map