import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

import { ChartistModule } from 'ng-chartist';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { DeviceMeasureService } from "./services/device-measure.service";
import { VoltageListComponent } from './components/voltage-list/voltage-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    VoltageListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    ChartistModule
  ],
  providers: [DeviceMeasureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
