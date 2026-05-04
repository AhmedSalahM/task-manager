import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Task {
   private tasks: Task[] = [];

  getTasks() {
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }
}
