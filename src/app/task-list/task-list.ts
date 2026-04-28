import { Component, Input } from '@angular/core';
import { TaskCard } from '../task-card/task-card';
import { Task } from '../Task-input/Task-input';

@Component({
  selector: 'app-task-list',
  imports: [TaskCard],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {

  @Input() TaskList:Task[]=[];
}
