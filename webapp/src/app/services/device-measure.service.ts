import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IResponse } from "../models/iresponse";
import { DeviceMeasure } from "../models/device-measure.model";
import { DEVICE_MEASURES } from "../models/device-measure.mock";

@Injectable()
export class DeviceMeasureService {
  private deviceMeasures: DeviceMeasure[];

  constructor(private http: HttpClient) {
    this.deviceMeasures = DEVICE_MEASURES;
  }

  getDeviceMeasures(moduleId: number): Promise<DeviceMeasure[]> {
    return this.http.get<IResponse<DeviceMeasure>>('http://40.71.197.209:3100/api/v1/voltages')
      .toPromise()
      .then(response => response.data as DeviceMeasure[])
    // return new Promise((resolve, reject) => {
    //   resolve(this.deviceMeasures);
    // });
  }

  getVoltages(moduleId: number): Promise<any[]> {
    return this.http.get<IResponse<any>>('http://40.71.197.209:3100/api/v1/voltages/volts')
      .toPromise()
      .then(response => response.data as any[])
    // return new Promise((resolve, reject) => {
    //   resolve(this.deviceMeasures);
    // });
  }
}
