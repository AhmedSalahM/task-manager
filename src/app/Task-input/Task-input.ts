import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-task-input',
  imports:[FormsModule],
  templateUrl: './task-input.html',
  styleUrl: './task-input.css',
})
export class TaskInput {
  curTask:Task={
    id:" ",
title : '',
  description: '',
  priority:   'Low',
  date:   '',
  category: 'Work',
  done:false
  };
 
  @Output() taskAdded=new EventEmitter<Task>();
  addTask() {
   this.curTask.id=uuidv4();
     if (
    !this.curTask.title?.trim() ||
    !this.curTask.description?.trim() ||
    !this.curTask.date?.trim() ||
    !this.curTask.category?.trim() ||
    !this.curTask.priority?.trim()
  ) {
    alert('Please fill all fields');
    return;
  }
    
this.taskAdded.emit(this.curTask)
    console.log(this.curTask);
  }



}
export interface Task{
  id:string;
  title: string ;
  description: string 
  priority: string ;
  date: string ;
  category: string ;
  done:boolean;
}