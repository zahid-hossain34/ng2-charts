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
export class MixinChartComponent implements OnInit {
  public lineChartType: ChartType = 'line';
  public lineChartDataPoints = [480, 470, 420, 380, 280, 370, 200];
  public barChartDataPoints = [200, 150, 230, 330, 500, 430, 260];
  ngOnInit(): void {}
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
        ctx.setLineDash([5, 4]);
        ctx.moveTo(tooltip._active[0].element.x, top);
        ctx.lineTo(tooltip._active[0].element.x, bottom);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();
      }
    },
  };
  public lineChartPlugins: Plugin[] = [this.lines];
  public ChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        type: 'line',
        borderWidth: 1,
        borderColor: 'green',
        pointRadius: 3,
        pointBackgroundColor: 'green',
        pointBorderWidth: 1,
        pointHoverBackgroundColor: 'white',
        pointHoverBorderColor: 'green',
        pointHoverRadius: 6,
        pointHoverBorderWidth: 1,
        fill: true,
        backgroundColor: ['rgba(84, 185, 72, 0.2)'],
        data: this.lineChartDataPoints,
        yAxisID: 'yAxisLine',
      },
      {
        type: 'bar',
        data: this.barChartDataPoints,
        borderColor: 'white',
        borderWidth: 2,
        backgroundColor: '#f1f5f9',
        yAxisID: 'yAxisBar',
        hoverBorderColor: 'transparent',
        hoverBackgroundColor: '#f1f5f9',

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
    animation: {
      duration: 0,
    },
    scales: {
      yAxisLine: {
        min: 0,
        max: 500,
        ticks: {
          stepSize: 125,
          maxTicksLimit: 5,
          font: {
            size: 10,
            weight: 'bold',
          },
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
          display: false,
          dash: [5, 4],
        },
        position: 'left',

        grid: {
          display: true,
          z: 1,
        },
      },
      yAxisBar: {
        min: 0,
        max: 500,
        ticks: {
          stepSize: 125,
          maxTicksLimit: 5,
          font: {
            size: 10,
            weight: 'bold',
          },
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
          display: false,
        },
        position: 'right',
        grid: {
          drawTicks: false,
          display: false,
        },
      },
      x: {
        display:false,
        beginAtZero: true,
        border: {
          display: false,
        },
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
        xAlign: 'right',
        padding: 8,
        bodySpacing: 8,
        bodyAlign: 'right',
        titleAlign: 'right',
        titleSpacing: 8,
        titleMarginBottom: 5,
        boxPadding: 10,
        caretSize: 0,
        caretPadding: 8,
      },
    },
  };
}
