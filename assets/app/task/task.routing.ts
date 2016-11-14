import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TaskCmp } from './task.cmp';
import { TasksListCmp } from './tasks-list';
import { AddTaskCmp } from './add-task';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'task', component: TaskCmp, children: [
        { path: '', redirectTo: 'list', pathMatch: 'full' },
        { path: 'list', component: TasksListCmp },
        { path: 'add/:task', component: AddTaskCmp },
        { path: 'add', component: AddTaskCmp }
      ]}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class TaskRoutingModule {}