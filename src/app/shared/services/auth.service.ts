import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(username: string, password: string) {
    // Authentication logic goes here
  }

  logout() {
    // Logout logic goes here
  }
}
