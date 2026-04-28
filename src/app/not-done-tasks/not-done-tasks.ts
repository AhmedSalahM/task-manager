import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskCard } from '../task-card/task-card';
import { Task } from '../Task-input/Task-input';

@Component({
  selector: 'app-not-done-tasks',
  imports: [TaskCard],
  templateUrl: './not-done-tasks.html',
  styleUrl: './not-done-tasks.css',
})
export class NotDoneTasks {

   @Input() Tasks:Task[]=[];
   get notDoneTasks() {
    return this.Tasks.filter(t => t.done === false);
  }
  
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
