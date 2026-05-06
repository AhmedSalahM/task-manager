import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Footer } from '../footer/footer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule,RouterModule,RouterOutlet,Footer],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
