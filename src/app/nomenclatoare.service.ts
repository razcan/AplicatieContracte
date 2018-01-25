import { Injectable } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class NomenclatoareService {
  constructor(private http: Http) { }

  getPrice(currency: string): Promise<number> {
    return this.http.get('http://api.coindesk.com/v1/bpi/currentprice.json').toPromise()
      .then(response => response.json().bpi[currency].rate);
  }

  getPartners() {
    return this.http.get('http://localhost:3001/LoadPartners').map(res => res.json())
    
  }

}
