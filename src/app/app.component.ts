import { Component ,ViewChild} from '@angular/core';
import { GitinfoService } from './services/gitinfo.service';


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
export class AppComponent  {
  //users:any;
  users: any = [];
  user1:any=[];
  followers:any=[];
   //users:any[] | undefined; 
 // @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>| any;
  title = 'tailwind';

  constructor(private getgit: GitinfoService){
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

  ngOnInit() {
  this.getgit.getGitUser().subscribe((res:any)=> {
        this.users = res;
        this.followers=res.followers;
        console.log(this.followers,'followers');
       // this.user1=this.users[0];
        console.log('users infooooooooooooooo',this.users)
        console.log("user info from github API");
    })
    
  //   this.getgit.getGitFollow().subscribe((res:any)=> {
 
  //    // this.user1=this.users[0];
  //    // console.log('users infooooooooooooooo',this.follow)
  //     console.log("user follow info from github API");
  // })

 
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

  

  SmallBox = () => {
    const colorWeights = [100, 400, 500, 600, 700];
    return 
  };


  


}
