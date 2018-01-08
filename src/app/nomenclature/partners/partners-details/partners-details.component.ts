import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET } from "@angular/router";
import "rxjs/add/operator/filter";
import { NgModule }      from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { HttpParams, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-partners-details',
  templateUrl: './partners-details.component.html',
  styleUrls: ['./partners-details.component.css']
})
export class PartnersDetailsComponent implements OnInit {

  PartnerStatus : string;
  PartnerName : string;
  PartnerCode : string;
  PartnerInternalCode: string;
  PartnerType : string;
  ShortPartnerName: string;
  ComercialRegistration: string;
  FiscalRegistration : string;
  PartnerAddress : string;
  LegalForm: string;
  Notes: string;
  VATPayer: string;
  BankAccount : string;
  Delegate : string;
  Agent : string;
  BaseCurrency : string;
  Phone : string;
  Email : string;
  WEB : string;

  constructor(private http: Http) { }

  PartnerSave() {
    this.http.post('http://localhost:3001/SavePartner', {
    PartnerStatus: this.PartnerStatus , 
    PartnerName: this.PartnerName, PartnerCode: this.PartnerCode, PartnerInternalCode: this.PartnerInternalCode,
    PartnerType: this.PartnerType, ShortPartnerName: this.ShortPartnerName,
    ComercialRegistration: this.ComercialRegistration, FiscalRegistration: this.FiscalRegistration, PartnerAddress: this.PartnerAddress,
    LegalForm: this.LegalForm, Notes: this.Notes, VATPayer: this.VATPayer,
    BankAccount: this.BankAccount, Delegate: this.Delegate, Agent: this.Agent,
    BaseCurrency: this.BaseCurrency, Phone: this.Phone, Email: this.Email, WEB: this.WEB,
  }).subscribe((res) => {
    const result = res.json();
    console.log(result);
  });
  }

  ngOnInit() {
  }

}
