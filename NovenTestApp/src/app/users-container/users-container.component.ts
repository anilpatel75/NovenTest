import { Component, OnInit,OnChanges } from '@angular/core';
import { MainServiceService } from '../components/main-service.service';

@Component({
  selector: 'app-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.css']
})
export class UsersContainerComponent implements OnInit {
    chartWithCompleted :any;
    chartWithUnCompleted: any;
  constructor(private mainService: MainServiceService) { }

  ngOnInit() {
    this.mainService.chartWithCompleted.subscribe((chartWithCompleted)=> {
     this.chartWithCompleted = chartWithCompleted;
    }),

    this.mainService.chartWithUnCompleted.subscribe((chartWithUnCompleted) => {
     this.chartWithUnCompleted = chartWithUnCompleted;
    })  
  }


}
