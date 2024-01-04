import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartType, Color, Plugin, plugins, scales } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-mixin-chart',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './mixin-chart.component.html',
  styleUrl: './mixin-chart.component.scss',
})
export class MixinChartComponent  {
  public lineChartType: ChartType = 'line';

  lines: any = {
    id: 'line',
    afterDraw: (chart: any, args: any, options: any) => {
      console.log(chart);
      const {ctx,tooltip,scales:{x,y},chartArea:{top,bottom,left,right,width,height}} = chart
      // const bep = 4.20;
      // ctx.beginPath();
      // ctx.strokeStyle = 'gray';
      // ctx.lineWidth = 1;
      // ctx.setLineDash([5, 5]);
      // ctx.moveTo(x.getPixelForValue(bep), top );
      // ctx.lineTo(x.getPixelForValue(bep), bottom);
      // ctx.stroke();
      // ctx.restore();
      if(tooltip._active[0]){
        ctx.beginPath();
        ctx.strokeStyle = 'gray';
        ctx.lineWidth = 1;
        ctx.setLineDash([5, 7]);
        ctx.moveTo(tooltip._active[0].element.x, top );
        ctx.lineTo(tooltip._active[0].element.x, bottom);
        ctx.stroke();
        ctx.restore();
      }
    
      // let x = chart.tooltip._active[0].element.x;
      // let yAxis = chart.scales.y;
      // let ctx = chart.ctx;

      // ctx.save();
      // ctx.beginPath();
      // ctx.moveTo(x, yAxis.top);
      // ctx.lineTo(x, yAxis.bottom);
      // ctx.lineWidth = 1;
      // ctx.strokeStyle = '#BFBFBF';
      // ctx.setLineDash([5, 5]);
      // ctx.stroke();
      // ctx.restore();
    },
  };
  public lineChartPlugins: Plugin[] = [this.lines];
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        type: 'line',
        borderWidth: 1,
        borderColor: 'green',
        pointBackgroundColor: 'green',
        pointHoverBackgroundColor: 'white',
        pointHoverBorderColor: 'black',
        pointHoverRadius: 5,
        pointHitRadius: 10,
        fill: true,
        backgroundColor: ['rgba(84, 185, 72, 0.2)'],
        data: [5, 3, 4, 10, 8, 9, 2],
      },
      {
        type: 'bar',
        data: [2, 4, 1, 3, 7, 3, 6],
        borderColor: 'white',
        borderWidth: 2,
        backgroundColor: '#f1f5f9',
      },
    ],
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  };
  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    interaction: {
      mode: 'index',
    },
    scales: {
      x: {
        grid: {
          display: false,
        },

      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        // position: 'top',
      },
      tooltip: {
        usePointStyle: true,
        callbacks: {
          label: function (context: any) {
            console.log(context);
          },
        },
      },
    },
  };
}
