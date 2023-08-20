import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { UserInterface } from '../interface/user';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  http = inject(HttpClient);
  image!: File;
  constructor() {}

  getUser() {
    const result = this.http
      .get<UserInterface>('https://randomuser.me/api/');
    return result;
  } //getUser

} //HttpService
