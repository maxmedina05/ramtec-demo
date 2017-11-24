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
  private options: any = {
    width: 420,
    height: 300
  };

  graphData: any;

  constructor(private service: DeviceMeasureService) { }

  ngOnInit() {
    this.service.getVoltages(0)
      .then(response => {
        let voltages = response.map(x => { return x.avg });
        let labels = response.map(x => { return "" + x._id.month + "-" + x._id.day });

        this.graphData = {
          labels: labels,
          series: [
            {
              data: voltages
            }
          ]
        };
        console.log(this.graphData);
      });
  }

  onDateRangeFilterChanged($event) {
    console.log("I changed!");
    console.log($event);
  }
}
