import { Component, OnInit, Input,OnChanges } from '@angular/core';
import {Chart} from  'chart.js'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnChanges {
@Input() chartDataCompleted;
@Input() chartDataUnCompleted;

 chart:any;

month = ['1','2','3','4','5','6','7','8','9','10','11','12'];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {

    //chart configuration
    this.chart =  new Chart('canvas',{
      type:'bar',
      data:{
        labels:[1,2,3,4,5,6,7,8,9],
        backgroundColor:'green',
        datasets:[
          {
            label:'Completed',
            data:this.chartDataCompleted,
            borderColor:"#ffcc00",
             fill:false
          },
          {
            label:'unCompleted',
            data:this.chartDataUnCompleted,
            borderColor:"red",
             fill:false
          }
        ]
      },
      options:{
        responsive: true,
				title: {
					display: true,
					text: 'Bar Chart'
				},
				tooltips: {
					mode: 'index',
					intersect: false,
				},
				hover: {
					mode: 'nearest',
					intersect: true
				},
        legend:{
          display:false
        },
        scales:{
          xAxes:[{
            display:true,
            scaleLabel: {
							display: true,
							labelString: 'Index'
						}
          }],
          yAxes:[{
            display:true,
            scaleLabel: {
							display: true,
							labelString: 'Ids'
						}
          }]
        }
      }
    })
  }
   
  
}
