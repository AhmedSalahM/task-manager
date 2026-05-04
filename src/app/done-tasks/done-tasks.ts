import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TaskCard } from '../task-card/task-card';
import { Task } from '../Task-input/Task-input';
import { Taskservice } from '../services/taskservice';

@Component({
  selector: 'app-done-tasks',
  imports: [TaskCard],
  templateUrl: './done-tasks.html',
  styleUrl: './done-tasks.css',
})
export class DoneTasks {
   @Input() Tasks:Task[]=[];
  taskServ=inject(Taskservice)
  
 @Output() done = new EventEmitter<Task>();
  @Output() delete = new EventEmitter<Task>();
  @Output() update = new EventEmitter<Task>();
  
  onDone(task: Task) {
  this.done.emit(task);
}

onDelete(task: Task) {
  this.delete.emit(task);
}

onUpdate(updatedTask: Task) {
  this.update.emit(updatedTask);
}
}
