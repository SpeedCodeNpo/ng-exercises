import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { UserInterface } from '../interface/user';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  http = inject(HttpClient);
  constructor() {}

  getUser() {
    return this.http.get<UserInterface>('https://randomuser.me/api/');
  }
}
