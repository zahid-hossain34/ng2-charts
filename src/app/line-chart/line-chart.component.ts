import { Component, OnInit, ViewChild } from '@angular/core';
import {  ChartConfiguration, ChartOptions, ChartType, ChartTypeRegistry, Plugin } from 'chart.js';
import { ChartEvent } from 'chart.js/dist/core/core.plugins';
import { BaseChartDirective, NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss'
})
export class LineChartComponent {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  public lineChartType: ChartType = 'line';


  constructor() {
    // Chart.register(Annotation);
  }
registerPlugin(plugin: Plugin) {}
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
      {
        data: [180, 480, 770, 90, 1100, 270, 400],
        label: 'Series C',
        yAxisID: 'y1',
        backgroundColor: 'rgba(255,0,0,0.3)',
        borderColor: 'red',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
    ],
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  };

  public lineChartOptions: ChartConfiguration['options'] = {
   responsive: true,
   maintainAspectRatio: false,
    elements: {
      line: {
        tension: 0.5,
      },
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      y: {
        position: 'left',
      },
      y1: {
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red',
        },
      },
    },
    // plugins: {
    //   customCanvasBackgroundColor: {
    //     color: 'lightGreen',
    //   }
    // }



  };
  // public plugin = {
  //   id: 'customCanvasBackgroundColor',
  //   beforeDraw: (chart, args, options) => {
  //     const {ctx} = chart;
  //     ctx.save();
  //     ctx.globalCompositeOperation = 'destination-over';
  //     ctx.fillStyle = options.color || '#99ffff';
  //     ctx.fillRect(0, 0, chart.width, chart.height);
  //     ctx.restore();
  //   }
  // };










}