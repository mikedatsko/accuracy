import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AddTaskApi } from './add-task.api';
import { Task } from '../task.interface';

import { Log, Level } from 'ng2-logger/ng2-logger';
const log = Log.create('AddTaskCmp()');
log.color = 'orange';

@Component({
  selector: 'add-task',
  templateUrl: './add-task.html'
})
export class AddTaskCmp {
  tasks: Task[] = [];
  taskEdit: Task = new Task('');
  subscribers: Array<any> = [];

  constructor(
    private addTaskApi: AddTaskApi,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.subscribeRoute();
  }

  subscribeRoute() {
    const subscriber = this.route.params.subscribe((params: Params) => {
      if (!!params['task']) {
        const taskDecoded = JSON.parse(atob(params['task']));
        this.taskEdit = taskDecoded;
      }
    });
  }

  onSubmit(form: NgForm) {
    log.d('onSubmit()', form);
    const task = new Task(form.value.name, '', form.value.taskId);
    log.d('onSubmit()', form, task);

    if (!!task.taskId) {
      this.addTaskApi
        .updateTask(task)
        .subscribe(
          data => {
            log.i('onSubmit() success', data);
            // let taskUpdated = this.tasks.filter(_task => _task.taskId === task.taskId);
            // if (taskUpdated.length === 0) {
            //   log.w('onSubmit() success->taskId incorrect');
            // } else {
            //   taskUpdated[0].name = task.name;
            // }
            this.router.navigate(['task/list']);
          },
          error => {
            // log.i('onSubmit() error', error);
          }
        );
    } else {
      this.addTaskApi
        .addTask(task)
        .subscribe(
          data => {
            log.i('onSubmit() success', data);
            // this.tasks.push(new Task(data.obj.name, data.obj.description, data.obj._id));
            this.router.navigate(['task/list']);
          },
          error => {
            // log.i('onSubmit() error', error);
          }
        );
    }
    this.taskEdit = new Task('');
    form.reset();
  }

  onEdit(task: Task) {
    log.d('onEdit()', task);
    this.taskEdit = task;
  }

  onRemove(task: Task) {
    log.d('onRemove()', task);

    this.addTaskApi
      .removeTask(task)
      .subscribe(
        data => {
          log.i('onSubmit() success', data);
          this.tasks.splice(this.tasks.indexOf(task), 1);
        },
        error => {
          // log.i('onSubmit() error', error);
        }
      );
  }

  getTasks() {
    this.addTaskApi.getTasks().subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }

  ngOnDestroy() {
    this.subscribers.forEach(subscriber => subscriber.unsubscribe());
  }
}