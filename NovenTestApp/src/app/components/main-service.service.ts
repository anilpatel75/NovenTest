import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  // observable  for listen events and bind data
  public userSubject = new Subject();
  
  // behaviorSubject for  bind data for chart
  public chartWithCompleted = new BehaviorSubject<any>('');
  public chartWithUnCompleted = new BehaviorSubject<any>('');


  constructor(private http: HttpClient) { }
     
  // fetch users from jasonplaceholder
    fetchUsers() {
      let url = 'https://jsonplaceholder.typicode.com/users';
        return this.http.get(url);
    }

    //fetching specific userdata
  fetchUser(id:number) {
    let url =`https://jsonplaceholder.typicode.com/todos/?userId=${id}`
     return this.http.get(url);
  }


}
