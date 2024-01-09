import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartConfiguration,
  ChartType,
  Color,
  Plugin,
  plugins,
  scales,
} from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-mixin-chart',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './mixin-chart.component.html',
  styleUrl: './mixin-chart.component.scss',
})
export class MixinChartComponent {
  public lineChartType: ChartType = 'line';

  lines: any = {
    id: 'line',
    afterDraw: (chart: any, args: any, options: any) => {
      const {
        ctx,
        tooltip,
        scales: { x, y },
        chartArea: { top, bottom, left, right, width, height },
      } = chart;
      if (tooltip._active[0]) {
        ctx.beginPath();
        ctx.strokeStyle = 'gray';
        ctx.lineWidth = 1;
        ctx.setLineDash([5, 5]);
        ctx.moveTo(tooltip._active[0].element.x, top);
        ctx.lineTo(tooltip._active[0].element.x, bottom);
        ctx.stroke();
        ctx.restore();
      }
    },
  };
  public lineChartPlugins: Plugin[] = [this.lines];
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        type: 'line',
        borderWidth: 1,
        borderColor: 'green',
        pointRadius: 4,
        pointBackgroundColor: 'green',
        pointHoverBackgroundColor: 'white',
        pointHoverBorderColor: 'green',
        pointHoverRadius: 6,
        pointHoverBorderWidth: 1,
        fill: true,
        backgroundColor: ['rgba(84, 185, 72, 0.2)'],
        data: [480, 300, 400, 100, 280, 70, 200],
        yAxisID: 'yAxisLine',
        
      },
      {
        type: 'bar',
        data: [200, 150, 30, 330, 500, 430, 60],
        borderColor: 'white',
        borderWidth: 2,
        backgroundColor: '#f1f5f9',
        yAxisID: 'yAxisBar',
      },
    ],
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  };
  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      yAxisLine: {
        min: 0,
        max: 500,
        ticks: {
          stepSize: 125,
        },
        title: {
          text: 'HOURS',
          display: true,
          color: 'green',
          font: {
            family: 'Comic Sans MS',
            size: 14,
          },
        },
        border: {
          color: 'transparent',
        },
        position: 'left',
        
        grid: {
          drawTicks: true,
          display: true,
          tickBorderDash: [1, 5],
        
        },
      },
      yAxisBar: {
        min: 0,
        max: 500,
        ticks: {
          stepSize: 125,
        },
        title: {
          text: 'REPORTING',
          display: true,
          color: 'olive',
          font: {
            family: 'Comic Sans MS',
            size: 14,
          },
        },
        beginAtZero: true,
        border: {
          color: 'transparent',
        },
        position: 'right',
        grid: {
          drawTicks: true,
          display: true,
          tickBorderDash: [1, 5],
   
        },
      },
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        padding: 8,
        bodySpacing: 8,
        bodyAlign: 'right',
        titleAlign:'right',
        titleSpacing: 8,
        titleFont:{
          size:14,
          weight:600
        },
        callbacks: {
          label: function (context: any) {},
        },
      },
    },
  };
}
