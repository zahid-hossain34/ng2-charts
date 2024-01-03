import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartType, Color } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';


@Component({
  selector: 'app-mixin-chart',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './mixin-chart.component.html',
  styleUrl: './mixin-chart.component.scss'
})
export class MixinChartComponent {

  public lineChartType: ChartType = 'bar';

  public lineChartData: ChartConfiguration['data'] = {
    datasets : [ {
      type: 'line',
      label: 'Dataset 1', 
      borderWidth: 2,
      fill: false,
      data: [5, 3, 4, 10, 8, 9, 2]
    }, {
      type: 'line',
      label: 'Dataset 2', 
      borderWidth: 2,
      fill: false,
      data: [8, 5, 2, 8, 7, 2, 6]
    }, {
      type: 'bar',
      label: 'Dataset 3', 
      stack: 'Stack 0',
      data: [2, 4, 1, 3, 7, 3, 6],
      borderColor: 'white',
      borderWidth: 2
    }, {
      type: 'bar',
      label: 'Dataset 4', 
      stack: 'Stack 0',
      data: [7, 2, 4, 5, 6, 4, 2]
    }],
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  }
    public lineChartOptions: ChartConfiguration['options'] = {
      responsive: true,
       scales: {
       
      }  };

  

}
