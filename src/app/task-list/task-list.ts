import { Component, EventEmitter, Input, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { TaskCard } from '../task-card/task-card';
import { Task } from '../Task-input/Task-input';
import { DoneTasks } from '../done-tasks/done-tasks';
import { NotDoneTasks } from '../not-done-tasks/not-done-tasks';
import { AllTasks } from '../all-tasks/all-tasks';
import { NotificationCenter } from '../notification-center/notification-center';


@Component({
  selector: 'app-task-list',
  imports: [DoneTasks,NotDoneTasks,AllTasks],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
   @Input() task!:Task;
   @Input() notificationCenter!: NotificationCenter;
  tasks:Task[]=[];
  activeTab: 'all' | 'done' | 'notDone' = 'all';
  // @Output() done = new EventEmitter<Task>();
  // @Output() delete = new EventEmitter<Task>();
  // @Output() update = new EventEmitter<Task>();
  ngOnChanges(changes:SimpleChanges){
     const t=changes['task'];
    
    if(!t.firstChange){
      this.tasks.push({...t.currentValue});
      console.log("Task List")
      console.log(this.tasks)
    }
  }

 get doneTasks() {
    return this.tasks.filter(t => t.done === true);
  }
    get notDoneTasks() {
    return this.tasks.filter(t => t.done === false);
  }
  onDone(task: Task) {
this.tasks = this.tasks.map(t =>
  t.id === task.id ? { ...t, done: true } : t
);
this.notificationCenter.add(
  'Task marked as done',
  'info'
);
}

onDelete(task: Task) {
  this.tasks = this.tasks.filter(t => t.id !== task.id);
  this.notificationCenter.add(
  'Task deleted',
  'warning'
);
}

onUpdate(updatedTask: Task) {
  this.tasks = this.tasks.map(t =>
    t.id === updatedTask.id ? updatedTask : t
  );
  this.notificationCenter.add(
  'Task updated successfully',
  'success'
);
}
  
}
