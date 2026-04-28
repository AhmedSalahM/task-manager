import { Component, Input } from '@angular/core';
import { Task } from '../Task-input/Task-input';

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {
 @Input() task!:Task;
 
  
}
