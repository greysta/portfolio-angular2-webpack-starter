import { Injectable } from '@angular/core';
import {
  Http,
  Response,
  Headers
} from '@angular/http';
import { Mail } from './mail';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpService {
  private bdUrl: string = './assets/projbd.json';

  constructor(private http: Http) {
  }

  public getData() {
    return this.http.get(this.bdUrl);
  }
}
