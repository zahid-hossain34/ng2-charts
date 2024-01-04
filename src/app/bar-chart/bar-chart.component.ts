import { Component, OnInit, ViewChild } from '@angular/core';
import {  ChartConfiguration, ChartOptions, ChartType } from 'chart.js';
import { ChartEvent } from 'chart.js/dist/core/core.plugins';
import { BaseChartDirective, NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent {

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  public barChartType: ChartType = 'bar';


  public barChartData: ChartConfiguration['data'] = {
    datasets: [{
      label: 'Monthly grouth',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 159, 64)',
        'rgb(255, 99, 132)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }],
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  };

  public barChartOptions: ChartConfiguration['options'] = {
   
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      y: {
        beginAtZero: true
      },

    },

    plugins: {
      
    },
  };



}

