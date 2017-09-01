import { Injectable } from '@angular/core';

@Injectable()
export class MyservicesService {
  users: string[];
  constructor() { 
    this.users=['Mark','John','shanon']
  }
  getUsers() {
    return this.users;
  }
}
