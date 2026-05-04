import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { TaskCard } from '../task-card/task-card';
import { Task } from '../Task-input/Task-input';
import { Taskservice } from '../services/taskservice';
import { Tasks } from '../tasks/tasks';

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
  taskServ=inject(Taskservice);
  onDone(task: Task) {
  this.done.emit(task);
}
tasks=signal<Task[]|null>(null);
// ngOnInit(){
//   this.taskServ.getAllTasks();
// // this.taskServ.getAllTasks().subscribe((data)=>this.tasks.set(data));
// }
onDelete(task: Task) {
  this.delete.emit(task);
}

onUpdate(updatedTask: Task) {
  this.update.emit(updatedTask);
}

}
