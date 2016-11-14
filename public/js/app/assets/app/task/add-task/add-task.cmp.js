var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AddTaskApi } from './add-task.api';
import { Task } from '../task.interface';
import { Log } from 'ng2-logger/ng2-logger';
var log = Log.create('AddTaskCmp()');
log.color = 'orange';
var AddTaskCmp = (function () {
    function AddTaskCmp(addTaskApi, router, route) {
        this.addTaskApi = addTaskApi;
        this.router = router;
        this.route = route;
        this.tasks = [];
        this.taskEdit = new Task('');
        this.subscribers = [];
        this.subscribeRoute();
    }
    AddTaskCmp.prototype.subscribeRoute = function () {
        var _this = this;
        var subscriber = this.route.params.subscribe(function (params) {
            if (!!params['task']) {
                var taskDecoded = JSON.parse(atob(params['task']));
                _this.taskEdit = taskDecoded;
            }
        });
    };
    AddTaskCmp.prototype.onSubmit = function (form) {
        var _this = this;
        log.d('onSubmit()', form);
        var task = new Task(form.value.name, '', form.value.taskId);
        log.d('onSubmit()', form, task);
        if (!!task.taskId) {
            this.addTaskApi
                .updateTask(task)
                .subscribe(function (data) {
                log.i('onSubmit() success', data);
                // let taskUpdated = this.tasks.filter(_task => _task.taskId === task.taskId);
                // if (taskUpdated.length === 0) {
                //   log.w('onSubmit() success->taskId incorrect');
                // } else {
                //   taskUpdated[0].name = task.name;
                // }
                _this.router.navigate(['task/list']);
            }, function (error) {
                // log.i('onSubmit() error', error);
            });
        }
        else {
            this.addTaskApi
                .addTask(task)
                .subscribe(function (data) {
                log.i('onSubmit() success', data);
                // this.tasks.push(new Task(data.obj.name, data.obj.description, data.obj._id));
                _this.router.navigate(['task/list']);
            }, function (error) {
                // log.i('onSubmit() error', error);
            });
        }
        this.taskEdit = new Task('');
        form.reset();
    };
    AddTaskCmp.prototype.onEdit = function (task) {
        log.d('onEdit()', task);
        this.taskEdit = task;
    };
    AddTaskCmp.prototype.onRemove = function (task) {
        var _this = this;
        log.d('onRemove()', task);
        this.addTaskApi
            .removeTask(task)
            .subscribe(function (data) {
            log.i('onSubmit() success', data);
            _this.tasks.splice(_this.tasks.indexOf(task), 1);
        }, function (error) {
            // log.i('onSubmit() error', error);
        });
    };
    AddTaskCmp.prototype.getTasks = function () {
        var _this = this;
        this.addTaskApi.getTasks().subscribe(function (tasks) {
            _this.tasks = tasks;
        });
    };
    AddTaskCmp.prototype.ngOnDestroy = function () {
        this.subscribers.forEach(function (subscriber) { return subscriber.unsubscribe(); });
    };
    return AddTaskCmp;
}());
AddTaskCmp = __decorate([
    Component({
        selector: 'add-task',
        templateUrl: './add-task.html'
    }),
    __metadata("design:paramtypes", [AddTaskApi,
        Router,
        ActivatedRoute])
], AddTaskCmp);
export { AddTaskCmp };
//# sourceMappingURL=add-task.cmp.js.map