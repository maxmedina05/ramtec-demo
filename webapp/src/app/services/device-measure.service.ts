import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

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

  constructor(private http: Http) {
    this.deviceMeasures = DEVICE_MEASURES;
  }

  getDeviceMeasures(moduleId: number): Promise<DeviceMeasure[]> {
    return new Promise((resolve, reject) => {
      resolve(this.deviceMeasures);
    });
  }
}
