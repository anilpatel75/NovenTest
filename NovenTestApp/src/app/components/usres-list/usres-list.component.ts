import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-usres-list',
  templateUrl: './usres-list.component.html',
  styleUrls: ['./usres-list.component.css']
})
export class UsresListComponent implements OnInit {
   listOfUsers:any;
  constructor( private  mainService: MainServiceService) { }

  ngOnInit() {
     this.mainService.fetchUsers().subscribe((usersData)=> {
       this.listOfUsers = usersData;
       console.log(this.listOfUsers)
     })
  }

  onSelectedusers(id:number) {
     this.mainService.fetchUser(id).subscribe((data)=>{
      this.mainService.userSubject.next(data);
     })
  }

}
