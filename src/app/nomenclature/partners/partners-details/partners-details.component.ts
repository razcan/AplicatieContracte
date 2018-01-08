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

  constructor() { }

  ngOnInit() {
  }

}
