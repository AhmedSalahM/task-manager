import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  toasts = signal<Toast[]>([]);

  show(message: string, type: Toast['type'] = 'info') {
    const toast = { message, type };

    this.toasts.set([...this.toasts(), toast]);

    
    setTimeout(() => this.remove(toast), 3000);
  }

  remove(toast: Toast) {
    this.toasts.set(
      this.toasts().filter(t => t !== toast)
    );
  }



}
export interface Toast {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
}