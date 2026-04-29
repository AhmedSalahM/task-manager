import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-notification-center',
  imports: [CommonModule],
  templateUrl: './notification-center.html',
  styleUrl: './notification-center.css',
})
export class NotificationCenter {
    notifications: Notification[] = [];

  add(message: string, type: Notification['type'] = 'info') {
    this.notifications.unshift({
      id: crypto.randomUUID(),
      message,
      type,
      date: new Date()
    });
  }

  remove(id: string) {
    this.notifications = this.notifications.filter(n => n.id !== id);
  }

}
export interface Notification {
  id: string;
  message: string;
  type: 'success' | 'info' | 'warning';
  date: Date;
}
