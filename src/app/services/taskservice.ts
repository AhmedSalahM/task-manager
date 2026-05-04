import { Injectable } from '@angular/core';
import { Task } from '../Task-input/Task-input';

@Injectable({
  providedIn: 'root',
})
export class Taskservice {
tasks:Task[]=[];
addTask(task:Task){
  // this.tasks.push(task)
  this.tasks=[...this.tasks,task];
}
getAllTasks(){
  return this.tasks;
}
getDoneTasks(){
  return this.tasks.filter(t=>t.done);
}
getNotDoneTasks(){
  return this.tasks.filter(t=>!t.done);
}
onDone(task: Task) {
this.tasks = this.tasks.map(t =>
  t.id === task.id ? { ...t, done: true } : t
);
}
onUndo(task: Task) {
  this.tasks = this.tasks.map(t =>
    t.id === task.id ? { ...t, done: false } : t
  );
}
onDelete(task: Task) {
  this.tasks = this.tasks.filter(t => t.id !== task.id);
//   this.notificationCenter.add(
//   'Task deleted',
//   'warning'
// );
}

onUpdate(updatedTask: Task) {
  this.tasks = this.tasks.map(t =>
    t.id === updatedTask.id ? updatedTask : t
  );
//   this.notificationCenter.add(
//   'Task updated successfully',
//   'success'
// );
}


}
