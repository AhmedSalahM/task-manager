import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Task, TaskInput } from './Task-input/Task-input';
import { TaskList } from './task-list/task-list';
import { SlideShow } from './slide-show/slide-show';
import { DoneTasks } from './done-tasks/done-tasks';
import { NotDoneTasks } from './not-done-tasks/not-done-tasks';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Footer,Header,TaskInput,TaskList,SlideShow,DoneTasks,NotDoneTasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task-manager');
  activeTab: 'all' | 'done' | 'notDone' = 'all';


  tasks: Task[] = [];

onTaskAdded(task: Task) {
  this.tasks.push({...task});
  console.log(this.tasks);
}
onDone(task: Task) {
  task.done = true;
}

onDelete(task: Task) {
  this.tasks = this.tasks.filter(t => t.id !== task.id);
}

onUpdate(updatedTask: Task) {
  this.tasks = this.tasks.map(t =>
    t.id === updatedTask.id ? updatedTask : t
  );
}
}
