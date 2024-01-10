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
  public lineChartDataPoints = [
    2786.3, 2786.3, 2786.8, 2792.2, 2812.2, 2437.4, 1981.3, 2676.4, 2807.0,
    2812.7, 2769.4, 2778.7, 2376.4, 1889.9, 3.7, 2583.9, 2861.5, 953.0, 416.9,
    2433.6, 1915.1, 1964.8, 2880.1, 2915.5, 2910.5, 2877.9, 2544.1, 2078.1,
    2859.1, 3010.5, 261.0, 261.0,
  ];
  public barChartDataPoints = [
    2512, 2512, 2513, 2524, 2520, 2509, 2498, 2520, 2509, 2524, 2527, 2524,
    2516, 2505, 2492, 2515, 2530, 2514, 435, 427, 2518, 2505, 2520, 2535, 2530,
    2526, 2505, 2497, 2517, 2497, 2065, 2065,
  ];
  public chartLevels = [
    'jan 01',
    'jan 02',
    'jan 03',
    'jan 04',
    'jan 05',
    'jan 06',
    'jan 07',
    'jan 08',
    'jan 09',
    'jan 10',
    'jan 11',
    'jan 12',
    'jan 13',
    'jan 14',
    'jan 15',
    'jan 16',
    'jan 17',
    'jan 18',
    'jan 19',
    'jan 20',
    'jan 21',
    'jan 22',
    'jan 23',
    'jan 24',
    'jan 25',
    'jan 26',
    'jan 27',
    'jan 28',
    'jan 29',
    'jan 30',
    'jan 31',
  ]
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
        barPercentage: 1,
      },
    ],
    // lebels for 1 to 31 days

    labels: this.chartLevels,
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
        ticks: {
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
          drawTicks: false,
          display: true,
          z: 1,
        },
      },
      yAxisBar: {
        ticks: {
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
        display: false,
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
