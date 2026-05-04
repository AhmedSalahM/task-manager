import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-header',
  imports: [RouterModule,RouterOutlet,Footer],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
