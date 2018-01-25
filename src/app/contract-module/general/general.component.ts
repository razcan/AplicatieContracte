import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgModule } from '@angular/core';
import { EditorModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { ViewChild, ElementRef } from '@angular/core';
import * as Quill from 'quill';
import { QuillModule } from 'ngx-quill';
import { FileUploadModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { Http, HttpModule } from '@angular/http';
import { HttpParams, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { InputTextModule, DataTableModule } from 'primeng/primeng';
import { CommonModule } from '@angular/common'
import { Observable } from 'rxjs/Observable';
import { BreadCrumbService } from './../../bread-crumb.service';
import { DropdownModule } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';
import {TooltipModule} from 'primeng/primeng';
import {CalendarModule} from 'primeng/primeng';
import {InputTextareaModule} from 'primeng/primeng';
import {InputSwitchModule} from 'primeng/primeng';
import "rxjs/add/operator/filter";
import {Injectable} from '@angular/core';
import { NomenclatoareService } from './../../nomenclatoare.service';

// declare var Quill: any;

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css'],
  providers: [ NomenclatoareService ]
})

export class GeneralComponent implements OnInit{
  ContractParent;
  Version;
  breadcrumb;
  partner: SelectItem[];
  PartnerName: string;
  ContractType;
  contract; 
  ContractNumber;
  ContractCode;
  SigningDate;
  StartDate;
  EndDate;
  ContractStatus;
  statusContract;
  ContractDescription;
  CorrespondenceAddress;
  TelephoneFax;
  Email;
  AddressedTo;
  classContract;
  ContractCategory;
  department;
  ResponsibleDepartment;
  responsible;
  ResponsiblePerson;
  expense_incomeClass;
  ExpenseandIncomeClass;
  center;
  CostCenter;
  cfLine;
  CashFlowLine;
  SelfExtension: boolean = true;
  ExtensionNotification;
  ExtensionNotificationDate;
  Notes;
  
  ListaParteneri ;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router, private _Nomenclatoare: NomenclatoareService) {
    router.events.subscribe();
    this.breadcrumb = router.url;

    

    this.contract = [
      { name: '---'},
      { name: 'Sales'},
      { name: 'Acquisitions'},      
    ];

    this.statusContract = [
      { name: '---'},
      { name: 'Activ'},
      { name: 'Closed'},      
    ];

    this.department = [
      { label: 'Select Department', value: null },
      { label: 'Trading', value: 'Trading' },
      { label: 'Accounting', value: 'Accounting' },      
    ];

    this.responsible = [
      { label: 'Select Person', value: null },
      { label: 'Vasilica', value: 'Vasilica' },
      { label: 'Vetuta', value: 'Vetuta' },      
    ];

    this.expense_incomeClass = [
      { label: 'Select Expense/Income Class', value: null },
      { label: '706', value: '706' },
      { label: '606', value: '606' },      
    ];

    this.center = [
      { label: 'Select CostCenter', value: null },
      { label: 'Financial', value: 'Financial' },
      { label: 'Trading', value: 'Trading' },      
    ];

    this.cfLine = [
      { label: 'Select CashFlowLine', value: null },
      { label: 'Financial', value: 'Financial' },
      { label: 'Trading', value: 'Trading' },      
    ];
  }
  PartnersListResult = [];
  LL = [{label: '', value: ''}]; 
  ngOnInit () {
    this._Nomenclatoare.getPartners().subscribe(resPartnerList => {
      this.ListaParteneri = resPartnerList;
      //console.log(JSON.stringify(this.ListaParteneri))
      this.PartnersListResult = this.ListaParteneri;
      // this.PartnersListResult = this.ListaParteneri ;
      // console.log(this.PartnersListResult);
      for (let i=1; i<this.PartnersListResult.length; i++) {
        // console.log(this.PartnersListResult[i].PartnerName);
        // this.LL[i].label=this.PartnersListResult[i].PartnerName
        // this.LL[i].value=this.PartnersListResult[i].PartnerCode
       this.LL.push({label: this.PartnersListResult[i].PartnerName, value: this.PartnersListResult[i].PartnerCode});
      }
  // console.log(this.LL);
    }); 
  }
         
}
