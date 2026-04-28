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