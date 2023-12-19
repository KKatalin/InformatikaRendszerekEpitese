import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll() {
    return lastValueFrom(this.http.get<User[]>('/api/users'));
  }

  createUser(user: User) {
    return lastValueFrom(this.http.post<User>('/api/users', user));
  }
}
