import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskCard } from '../task-card/task-card';
import { Task } from '../Task-input/Task-input';

@Component({
  selector: 'app-all-tasks',
  imports: [TaskCard],
  templateUrl: './all-tasks.html',
  styleUrl: './all-tasks.css',
})
export class AllTasks {

@Input() Tasks:Task[]=[];
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
