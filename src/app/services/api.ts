import { HttpClient, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Api {
  baseUrl = 'http://localhost:3000';
  http=inject(HttpClient);
}
