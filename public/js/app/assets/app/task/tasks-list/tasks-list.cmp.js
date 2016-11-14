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
import { Router } from '@angular/router';
import { TasksListApi } from './tasks-list.api';
import { Task } from '../task.interface';
import { Log } from 'ng2-logger/ng2-logger';
var log = Log.create('AddTaskCmp()');
log.color = 'orange';
var TasksListCmp = (function () {
    function TasksListCmp(tasksListApi, router) {
        this.tasksListApi = tasksListApi;
        this.router = router;
        this.tasks = [];
        this.isLoaded = false;
    }
    TasksListCmp.prototype.ngOnInit = function () {
        this.getTasks();
    };
    TasksListCmp.prototype.onSubmit = function (form) {
        var _this = this;
        log.d('onSubmit()', form);
        var task = new Task(form.value.name, '', form.value.taskId);
        log.d('onSubmit()', form, task);
        if (!!task.taskId) {
            this.tasksListApi
                .updateTask(task)
                .subscribe(function (data) {
                log.i('onSubmit() success', data);
                var taskUpdated = _this.tasks.filter(function (_task) { return _task.taskId === task.taskId; });
                if (taskUpdated.length === 0) {
                    log.w('onSubmit() success->taskId incorrect');
                }
                else {
                    taskUpdated[0].name = task.name;
                }
            }, function (error) {
                // log.i('onSubmit() error', error);
            });
        }
        else {
            this.tasksListApi
                .addTask(task)
                .subscribe(function (data) {
                log.i('onSubmit() success', data);
                _this.tasks.push(new Task(data.obj.name, data.obj.description, data.obj._id));
            }, function (error) {
                // log.i('onSubmit() error', error);
            });
        }
        this.taskEdit = new Task('');
        form.reset();
    };
    TasksListCmp.prototype.onEdit = function (task) {
        log.d('onEdit()', task);
        // this.taskEdit = task;
        var taskEncoded = btoa(JSON.stringify(task));
        this.router.navigate(['task/add/' + taskEncoded]);
    };
    TasksListCmp.prototype.onRemove = function (task) {
        var _this = this;
        log.d('onRemove()', task);
        if (!confirm('You sure?')) {
            return;
        }
        this.tasksListApi
            .removeTask(task)
            .subscribe(function (data) {
            log.i('onSubmit() success', data);
            _this.tasks.splice(_this.tasks.indexOf(task), 1);
        }, function (error) {
            // log.i('onSubmit() error', error);
        });
    };
    TasksListCmp.prototype.getTasks = function () {
        var _this = this;
        this.isLoaded = false;
        this.tasksListApi.getTasks().subscribe(function (tasks) {
            _this.tasks = tasks;
            setTimeout(function () {
                _this.isLoaded = true;
            }, 500);
        });
    };
    return TasksListCmp;
}());
TasksListCmp = __decorate([
    Component({
        selector: 'tasks-list',
        templateUrl: './tasks-list.html'
    }),
    __metadata("design:paramtypes", [TasksListApi,
        Router])
], TasksListCmp);
export { TasksListCmp };
//# sourceMappingURL=tasks-list.cmp.js.map