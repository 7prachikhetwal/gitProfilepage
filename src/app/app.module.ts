import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HeatMapAllModule } from '@syncfusion/ej2-angular-heatmap';
import { NgApexchartsModule } from "ng-apexcharts";
import { GitinfoService } from './services/gitinfo.service';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,HttpClientModule,
    AppRoutingModule,NgApexchartsModule,
  ],
  providers: [GitinfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
