import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class MyservicesService {

  data : Observable<Array<number>>;
  users: string[];

  constructor(public http:Http) { 
    this.users=['Mark','John','shanon']
  }
  getData() {
    this.data= new Observable(observer=> {
      setTimeout(()=>{
        observer.next(1);
      },1000);
      setTimeout(()=>{
        observer.next(2);
      },2000);
      setTimeout(()=>{
        observer.next('Hello');
      },3000);
      setTimeout(()=>{
        observer.complete();
      },4000);
    });
    return this.data;
  }
  /* use jsonplacehilder**/
  getUsersHttp ()
  {
    return this.http.get("http://jsonplaceholder.typicode.com/users")
    .map(res=>res.json())
    ;
  }
  getUsers() {
    return this.users;
  }
}
