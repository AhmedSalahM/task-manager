import { Component, Input } from '@angular/core';
import { Task } from '../Task-input/Task-input';
import { TaskList } from '../task-list/task-list';

@Component({
  selector: 'app-tasks',
  imports: [TaskList],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
 @Input() task!:Task;

}
