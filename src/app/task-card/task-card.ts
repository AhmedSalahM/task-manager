import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Task } from '../Task-input/Task-input';
import { CommonModule } from '@angular/common';

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

  ngOnInit() {
    this.editTask = { ...this.task }; // clone
  }

  doneF() {
    this.done.emit(this.task);
  }

  deleteF() {
    this.delete.emit(this.task);
  }

  updateF() {
    this.isEditMode = true;
    this.editTask = { ...this.task };
  }

  saveUpdate() {
    this.update.emit(this.editTask);
    this.isEditMode = false;
  }

  cancel() {
    this.isEditMode = false;
  }
}