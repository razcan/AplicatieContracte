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
  getPersonResponsible() {
    return this.http.get('http://localhost:3001/LoadPersonResponsible').map(res => res.json())
  }
  getDepartment() {
    return this.http.get('http://localhost:3001/LoadDepartment').map(res => res.json())
  }

  getContractCategory() {
    return this.http.get('http://localhost:3001/LoadContractCategory').map(res => res.json())
  }

  getCostCenter() {
    return this.http.get('http://localhost:3001/LoadCostCenter').map(res => res.json())
  }

  getCashFlowLine() {
    return this.http.get('http://localhost:3001/LoadCashFlowLine').map(res => res.json())
  }

  getClassIE() {
    return this.http.get('http://localhost:3001/LoadClassIE').map(res => res.json())
  }
}
