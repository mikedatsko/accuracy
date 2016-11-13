import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TasksListApi } from './tasks-list.api';
import { Task } from '../task.interface';

import { Log, Level } from 'ng2-logger/ng2-logger';
const log = Log.create('AddTaskCmp()');
log.color = 'orange';

@Component({
  selector: 'tasks-list',
  templateUrl: './tasks-list.html'
})
export class TasksListCmp {
  tasks: Task[] = [];
  taskEdit: Task;
  isLoaded: boolean = false;

  constructor(
    private tasksListApi: TasksListApi,
    private router: Router
  ) {
    
  }

  ngOnInit() {
    this.getTasks();
  }

  onSubmit(form: NgForm) {
    log.d('onSubmit()', form);
    const task = new Task(form.value.name, '', form.value.taskId);
    log.d('onSubmit()', form, task);

    if (!!task.taskId) {
      this.tasksListApi
        .updateTask(task)
        .subscribe(
          data => {
            log.i('onSubmit() success', data);
            let taskUpdated = this.tasks.filter(_task => _task.taskId === task.taskId);
            if (taskUpdated.length === 0) {
              log.w('onSubmit() success->taskId incorrect');
            } else {
              taskUpdated[0].name = task.name;
            }
          },
          error => {
            // log.i('onSubmit() error', error);
          }
        );
    } else {
      this.tasksListApi
        .addTask(task)
        .subscribe(
          data => {
            log.i('onSubmit() success', data);
            this.tasks.push(new Task(data.obj.name, data.obj.description, data.obj._id));
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
    // this.taskEdit = task;
    const taskEncoded = btoa(JSON.stringify(task));
    this.router.navigate(['task/add/' + taskEncoded]);
  }

  onRemove(task: Task) {
    log.d('onRemove()', task);

    if (!confirm('You sure?')) {
      return
    }
    this.tasksListApi
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
    this.isLoaded = false;
    this.tasksListApi.getTasks().subscribe((tasks: Task[]) => {
      this.tasks = tasks;
      setTimeout(() => {
        this.isLoaded = true;
      }, 500);
    });
  }
}