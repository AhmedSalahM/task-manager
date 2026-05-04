import { Component, ViewChild } from '@angular/core';
import { Task, TaskInput } from '../Task-input/Task-input';
import { NotificationCenter } from '../notification-center/notification-center';
import { TaskList } from '../task-list/task-list';
import { AllTasks } from '../all-tasks/all-tasks';
import { Tasks } from '../tasks/tasks';

@Component({
  selector: 'app-add-task',
  imports: [TaskInput,Tasks,NotificationCenter],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {
    task!:Task;

@ViewChild('notify') notify!: NotificationCenter;
onTaskAdded(task: Task) {
  //this.tasks.push({...task});
console.log("hhhhhhhhhhhhhhhhhhhhhhh:",this.notify);
  this.task = { ...task };
  this.notify.add(
  'Task created successfully',
  'success'
);

}
}
