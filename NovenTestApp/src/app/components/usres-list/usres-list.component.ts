import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-usres-list',
  templateUrl: './usres-list.component.html',
  styleUrls: ['./usres-list.component.css']
})
export class UsresListComponent implements OnInit {
   //storing list of user 
   listOfUsers:any;

  constructor( private  mainService: MainServiceService) { }

  ngOnInit() {
    //this method run when component created
     this.mainService.fetchUsers().subscribe((usersData)=> {
       this.listOfUsers = usersData;
       console.log(this.listOfUsers)
     })
  }

  // function call when click to any user
  // used service to get the user data from json placeholder
  onSelectedusers(id:number) {
     this.mainService.fetchUser(id).subscribe((data)=>{
      this.mainService.userSubject.next(data);
     })
  }

}
