import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-selected-user',
  templateUrl: './selected-user.component.html',
  styleUrls: ['./selected-user.component.css']
})
export class SelectedUserComponent implements OnInit {
  userCompleted:Array<any> = [];
  userUncompleted : Array<any> = [];
  chartCompleted: Array<any> = [];
  chartUncompleted: Array<any> = [];
  constructor(private mainService: MainServiceService) { }

  ngOnInit() {

    this.mainService.userSubject.subscribe((data) => {
      this.filterData(data)
    })
  }

  //this function filter Data for user status
  filterData(data) {

    //need to reset array for latestUsers
    this.userCompleted = []
    this.userUncompleted = []

    // chart Array for display chart Data
     this.chartCompleted = [];
    this.chartUncompleted = [];


    // filter based on completed
    data.forEach((item) => {
      item.completed == true ? this.userCompleted.push(item) : this.userUncompleted.push(item)
    })

    
    //sorting by id
    this.sortItem(this.userCompleted);
    this.sortItem(this.userUncompleted);

    // for chart 
    this.userCompleted.map((data) => this.chartCompleted.push(data.id))
    this.userUncompleted.map((data) => this.chartUncompleted.push(data.id))

    // bind data to dispaly chart 
    this.mainService.chartWithCompleted.next(this.chartCompleted);
    this.mainService.chartWithUnCompleted.next(this.chartUncompleted);
  }

  // sorting based on id
  sortItem(item:any) {
    item.sort((a:any, b:any) => {
      return a.id -  b.id;
    })
  }
}
