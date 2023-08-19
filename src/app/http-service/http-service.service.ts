import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  http = inject(HttpClient);
  constructor() {}

  getImage() {
    return this.http.get('https://randomuser.me/api/');
  }
}
