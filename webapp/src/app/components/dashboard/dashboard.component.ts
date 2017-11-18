import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DeviceMeasure } from '../../models/device-measure.model';
import { DeviceMeasureService } from '../../services/device-measure.service';

import { ChartType } from 'ng-chartist';

export interface LiveData {
  labels: string[];
  series: Array<any>;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  private labels: string[];
  private voltages: number[];
  private options: any = {
    width: 420,
    height: 300
  };

  graphData: LiveData = {
    labels: [],
    series: []
  };
  type: ChartType = 'Bar';

  constructor(private service: DeviceMeasureService) { }

  ngOnInit() {
    this.service.getDeviceMeasures(0)
      .then(measures => {
        this.voltages = measures.map( x => { return x.voltage01 });
        this.labels = measures.map( x => { return "" + x.createdAt.getDate() });

        this.graphData.labels = this.labels;
        this.graphData.series = [
          {
            data: this.voltages
          }
        ];
      });
  }

  onDateRangeFilterChanged($event) {
    console.log("I changed!");
    console.log($event);
  }
}
