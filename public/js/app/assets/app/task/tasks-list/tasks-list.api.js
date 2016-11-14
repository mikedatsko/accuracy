var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { Task } from '../task.interface';
import { Log } from 'ng2-logger/ng2-logger';
var log = Log.create('TasksListApi()');
log.color = 'darkgreen';
var TasksListApi = (function () {
    function TasksListApi(http) {
        this.http = http;
        this.tasks = [];
        log.d('constructor()', API);
    }
    TasksListApi.prototype.addTask = function (task) {
        var body = JSON.stringify(task);
        var headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.post(API + 'task', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    TasksListApi.prototype.updateTask = function (task) {
        var body = JSON.stringify(task);
        var headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.patch(API + 'task/' + task.taskId, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    TasksListApi.prototype.removeTask = function (task) {
        var headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.delete(API + 'task/' + task.taskId, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    TasksListApi.prototype.getTasks = function () {
        var _this = this;
        return this.http.get(API + 'task')
            .map(function (response) {
            var tasks = response.json().obj;
            var tasksFormatted = [];
            for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
                var task = tasks_1[_i];
                tasksFormatted.push(new Task(task.name, 'desc', task._id, null));
            }
            _this.tasks = tasksFormatted;
            return tasksFormatted;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    return TasksListApi;
}());
TasksListApi = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], TasksListApi);
export { TasksListApi };
//# sourceMappingURL=tasks-list.api.js.map