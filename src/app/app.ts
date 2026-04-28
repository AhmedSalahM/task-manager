import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Task, TaskInput } from './Task-input/Task-input';
import { TaskList } from './task-list/task-list';
import { SlideShow } from './slide-show/slide-show';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Footer,Header,TaskInput,TaskList,SlideShow],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task-manager');

  tasks: Task[] = [];

onTaskAdded(task: Task) {
  this.tasks.push({...task});
  console.log(this.tasks);
}
}
