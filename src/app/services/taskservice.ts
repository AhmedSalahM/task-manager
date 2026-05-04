import { computed, inject, Injectable, signal } from '@angular/core';
import { Task } from '../Task-input/Task-input';
import { Api } from './api';

@Injectable({
  providedIn: 'root',
})
export class Taskservice {
  api = inject(Api);

tasks=signal<Task[]>([]);
endpoint = 'tasks';
url=this.api.baseUrl+"/"+this.endpoint;
addTask(task:Task){
  // this.tasks.push(task)
  // this.tasks=[...this.tasks,task];
  
     this.api.http.post<Task>(this.url, task)
    .subscribe(newTask => {
      this.tasks.set([...this.tasks(), newTask]);
    });
}
getAllTasks(){
  //return this.tasks;
 this.api.http.get<Task[]>(this.url).subscribe(data=>this.tasks.set(data));
  // return this.api.http.get<Task[]>(this.url)
}
doneTasks = computed(() =>
  this.tasks().filter(t => t.done)
);

notDoneTasks = computed(() =>
  this.tasks().filter(t => !t.done)
);
// getDoneTasks(){
//    return this.tasks().filter(t=>t.done);

// }
// getNotDoneTasks(){
//   return this.tasks().filter(t=>!t.done);
// }
onDone(task: Task) {
  const updated = { ...task, done: true };

  this.api.http.put(`${this.url}/${task.id}`, updated)
    .subscribe(() => {
      this.tasks.set(
        this.tasks().map(t => t.id === task.id ? updated : t)
      );
    });
}
onUndo(task: Task) {
    const updated = { ...task, done: false };

  this.api.http.put(`${this.url}/${task.id}`, updated)
    .subscribe(() => {
      this.tasks.set(
        this.tasks().map(t => t.id === task.id ? updated : t)
      );
    });
}
onDelete(task: Task) {
    this.api.http.delete(`${this.url}/${task.id}`)
    .subscribe(() => {
      this.tasks.set(
        this.tasks().filter(t => t.id !== task.id)
      );
    });
  // this.tasks.set(this.tasks().filter(t => t.id !== task.id));
//   this.notificationCenter.add(
//   'Task deleted',
//   'warning'
// );
}

onUpdate(updatedTask: Task) {

  this.api.http.put(`${this.url}/${updatedTask.id}`, updatedTask)
    .subscribe(() => {
      this.tasks.set(
        this.tasks().map(t =>
          t.id === updatedTask.id ? updatedTask : t
        )
      );
    });

  // this.tasks.set(this.tasks().map(t =>
  //   t.id === updatedTask.id ? updatedTask : t
  // ));
//   this.notificationCenter.add(
//   'Task updated successfully',
//   'success'
// );
}


}
