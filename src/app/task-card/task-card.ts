import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Task } from '../Task-input/Task-input';
import { CommonModule } from '@angular/common';
import { Taskservice } from '../services/taskservice';

@Component({
  selector: 'app-task-card',
  imports: [FormsModule, CommonModule],
  templateUrl: './task-card.html',
  styleUrls: ['./task-card.css'],
})
export class TaskCard {

  @Input() task!: Task;

  @Output() delete = new EventEmitter<Task>();
  @Output() done = new EventEmitter<Task>();
  @Output() update = new EventEmitter<Task>();

  isEditMode = false;
  editTask!: Task;

taskServ=inject(Taskservice);
  ngOnInit() {
    this.editTask = { ...this.task }; // clone
  }

  doneF() {
   this.taskServ.onDone(this.task);
  }

  deleteF() {
   this.taskServ.onDelete(this.task);
  }

  updateF() {
    this.isEditMode = true;
    this.editTask = { ...this.task };
  }

  saveUpdate() {
    this.update.emit(this.editTask);
    this.isEditMode = false;
    this.taskServ.onUpdate(this.editTask);
  }
undoF() {
  this.taskServ.onUndo(this.task);
}
  cancel() {
    this.isEditMode = false;
  }

}