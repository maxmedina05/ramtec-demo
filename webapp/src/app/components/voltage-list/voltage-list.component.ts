import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DeviceMeasure } from '../../models/device-measure.model';
import { DeviceMeasureService } from '../../services/device-measure.service';

@Component({
  selector: 'app-voltage-list',
  templateUrl: './voltage-list.component.html',
  styleUrls: ['./voltage-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VoltageListComponent implements OnInit {
  private measures: DeviceMeasure[] = [];

  constructor(private service: DeviceMeasureService) { }

  ngOnInit() {
    this.service.getDeviceMeasures(0)
      .then(measures => {
        this.measures = measures;
      });
  }

}
