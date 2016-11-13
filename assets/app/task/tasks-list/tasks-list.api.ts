import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { Task } from '../task.interface';

import { Log, Level } from 'ng2-logger/ng2-logger';
const log = Log.create('TasksListApi()');
log.color = 'darkgreen';

@Injectable()
export class TasksListApi {
  private tasks: Task[] = [];

  constructor(private http: Http) {
    log.d('constructor()', API);
  }

  addTask(task: Task) {
    const body = JSON.stringify(task);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(API + 'task', body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  updateTask(task: Task) {
    const body = JSON.stringify(task);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.patch(API + 'task/' + task.taskId, body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  removeTask(task: Task) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.delete(API + 'task/' + task.taskId, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  getTasks() {
    return this.http.get(API + 'task')
      .map((response: Response) => {
        const tasks = response.json().obj;
        let tasksFormatted: Task[] = [];
        
        for(let task of tasks) {
          tasksFormatted.push(new Task(task.name, 'desc', task._id, null));
        }

        this.tasks = tasksFormatted;
        return tasksFormatted;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }

  // editTask(task: Task) {
  //   return Observable.create(observer => observer.next(task));
  // }
}