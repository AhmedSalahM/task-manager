import { Component,ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { Task,TaskInput } from '../Task-input/Task-input';
import { TaskList } from '../task-list/task-list';
import { SlideShow } from '../slide-show/slide-show';
import { NotificationCenter } from '../notification-center/notification-center';

@Component({
  selector: 'app-home',
   imports: [RouterOutlet,Footer,Header,TaskInput,TaskList,SlideShow,NotificationCenter],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {


//     task!:Task;

// @ViewChild('notify') notify!: NotificationCenter;
// onTaskAdded(task: Task) {
//   //this.tasks.push({...task});
// console.log("hhhhhhhhhhhhhhhhhhhhhhh:",this.notify);
//   this.task = { ...task };
//   this.notify.add(
//   'Task created successfully',
//   'success'
// );
// }
}
