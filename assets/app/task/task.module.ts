import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TaskRoutingModule } from './task.routing';

import { TaskCmp } from './task.cmp';
import { TasksListCmp, TasksListApi } from './tasks-list';
import { AddTaskCmp, AddTaskApi } from './add-task';

@NgModule({
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
  providers: [ AddTaskApi, TasksListApi ]
})
export class TaskModule {

}