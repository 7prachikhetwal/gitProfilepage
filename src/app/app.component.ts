import { Component ,ViewChild} from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
 // xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 // @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>| any;
  title = 'tailwind';

  constructor(){
    this.chartOptions = {
      series: [
        {
          name: "Monday",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Tuesday",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Wednesday",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Thursday",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Friday",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Saturday",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Sunday",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        
        
      ],
      chart: {
        height: 350,
        type: "heatmap"
      },
      dataLabels: {
        enabled: false
      },
      colors: ["#228b22"],
      title: {
        text: "694 Contributions in the last year"
      }
    };
  }

  public generateData(count:any, yrange:any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = "month" + (i + 1).toString();
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
  }

  //
  
  
  //

   Contribution = () => {
    const contribution = new Array(300).fill(1);
    const months = [
      `Jan`,
      `Feb`,
      `Mar`,
      `Apr`,
      `May`,
      `Jun`,
      `Jul`,
      `Aug`,
      `Sept`,
      `Oct`,
      `Nov`,
      `Dec`,
    ];
  
  
    const weekDays = ['Mon', 'Wed', 'Fri'];
  
  }

  months(){
   
  }

  SmallBox = () => {
    const colorWeights = [100, 400, 500, 600, 700];
    return 
  };
  


}
