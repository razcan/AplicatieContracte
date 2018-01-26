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
import { Renderer2,OnDestroy,OnChanges,ChangeDetectionStrategy,Input } from '@angular/core';
import { BootstrapSwitchModule } from 'angular2-bootstrap-switch';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// declare var Quill: any;

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css'],
  providers: [ NomenclatoareService ]
})

export class GeneralComponent implements OnInit{

  @ViewChild('someInput') someInput: ElementRef;
  ContractParent;
  Version;
  breadcrumb;
  partner: SelectItem[];
  PartnerName: string;
  PartnerId;
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
  
  department;
  ResponsibleDepartment;
  responsible;
  ResponsiblePerson;
  expense_incomeClass;
  ExpenseandIncomeClass;
  center;
 
  cfLine;
  
  SelfExtension: boolean = true;
  ExtensionNotification;
  ExtensionNotificationDate;
  Notes;
  
  ListaParteneri ;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router, private _Nomenclatoare: NomenclatoareService, private http: Http, 
    private renderer: Renderer2, private el: ElementRef) {
    router.events.subscribe();
    this.breadcrumb = router.url;

    

    this.contract = [
      { name: 'Select Contract Type' },
      { name: 'Sales'},
      { name: 'Acquisitions'},      
    ];

    this.statusContract = [
      { name: 'Select Contract Status' },
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
  ListaPersoane = [] ;
  LP = [{label: '', value: ''}]; 
  ngOnInit () {
    this._Nomenclatoare.getPartners().subscribe(resPartnerList => {
      this.ListaParteneri = resPartnerList;
      //console.log(JSON.stringify(this.ListaParteneri))
      this.PartnersListResult = this.ListaParteneri;
      // this.PartnersListResult = this.ListaParteneri ;
      // console.log(this.PartnersListResult);
      for (let i=0; i<this.PartnersListResult.length; i++) {
        // console.log(this.PartnersListResult[i].PartnerName);
        // this.LL[i].label=this.PartnersListResult[i].PartnerName
        // this.LL[i].value=this.PartnersListResult[i].PartnerCode
       this.LL.push({label: this.PartnersListResult[i].PartnerName, value: this.PartnersListResult[i].PartnerId});
      }
  // console.log(this.LL);
    }); 
   
    this._Nomenclatoare.getPersonResponsible().subscribe(resPersonResponsible => {
      this.ListaPersoane = resPersonResponsible;
      for (let i=0; i<this.ListaPersoane.length; i++) {
       this.LP.push({label: this.ListaPersoane[i].Name +' '+ this.ListaPersoane[i].Surname, value: this.ListaPersoane[i].PersonId});
      }
    }
    )
  }

ContractSave() {
  console.log(this.PartnerId, this.ContractType.name,this.ContractNumber, this.ContractCode, this.SigningDate,
    this.StartDate, this.EndDate, this.ContractStatus.name, this.ContractDescription)
}

Name;
Surname;
CNP;
EmplFunction;
EmplEmail;
Telephone;

displayPerson: boolean = false;
showDialogPerson() {
  this.displayPerson = true;
}
PersonId ;

SavePerson(PersonId, Name, Surname, CNP, EmplFunction, EmplEmail, Telephone) {
  this.http.post('http://localhost:3001/SavePersonResponsible', {
    PersonId: PersonId,  
    Name: Name,
    Surname: Surname,
    CNP: CNP,
    EmplFunction: EmplFunction, 
    EmplEmail: EmplEmail,
    Telephone: Telephone,
  }).subscribe((res) => {
    const result = res.json();
    console.log(result);
  });
  }
  
  results = [] ;

showDialogForPerson(ResponsiblePerson) {
  this.displayPerson = true;
  this.http.get('http://localhost:3001/LoadPersonResponsible/' + this.ResponsiblePerson).subscribe((res) => {
      const results = res.json();
      this.PersonId=results[0].PersonId
      this.Name=results[0].Name
      this.Surname=results[0].Surname
      this.CNP=results[0].CNP
      this.EmplFunction=results[0].EmplFunction
      this.EmplEmail=results[0].EmplEmail
      this.Telephone=results[0].Telephone
}

  )}

 
CodeDepartament;
DenumireDepartament;
ResponsabilDepartament;

displayAddDepartment: boolean = false;
showDialogAddDepartament() {
  this.displayAddDepartment = true;
}

display: boolean = false;

saveAddDepartment(CodeDepartament, DenumireDepartament, ResponsabilDepartament) {
  console.log(CodeDepartament, DenumireDepartament, ResponsabilDepartament);
  this.CodeDepartament = '';
  this.DenumireDepartament = '';
  this.ResponsabilDepartament = '';
  this.display = false;
}

displayEditDepartment: boolean = false;
showDialogEditDepartament() {
  this.displayEditDepartment = true;
}
saveEditDepartment(CodeDepartament, DenumireDepartament, ResponsabilDepartament) {
  console.log(CodeDepartament, DenumireDepartament, ResponsabilDepartament);
  this.CodeDepartament = '';
  this.DenumireDepartament = '';
  this.ResponsabilDepartament = '';
  this.display = false;
}

ContractCategory;

displayAddContractCategory: boolean = false;
showDialogAddContractCategory() {
  this.displayAddContractCategory = true;
}

saveAddContractCategory(ContractCategory) {
  console.log(ContractCategory);
  this.ContractCategory = ''; 
  this.display = false;
}

displayEditContractCategory: boolean = false;
showDialogEditContractCategory() {
  this.displayEditContractCategory = true;
}

saveEditContractCategory(ContractCategory) {
  console.log(ContractCategory);
  this.ContractCategory = ''; 
  this.display = false;
}

CostCenter;

displayAddCostCenter: boolean = false;
showDialogAddCostCenter() {
  this.displayAddCostCenter = true;
}

saveAddCostCenter(CostCenter) {
  console.log(CostCenter);
  this.CostCenter = ''; 
  this.display = false;
}

displayEditCostCenter: boolean = false;
showDialogEditCostCenter() {
  this.displayEditCostCenter = true;
}

saveEditCostCenter(CostCenter) {
  console.log(CostCenter);
  this.CostCenter = ''; 
  this.display = false;
}

CashFlowLine;

displayAddCashFlowLine: boolean = false;
showDialogAddCashFlowLine() {
  this.displayAddCashFlowLine = true;
}

saveAddCashFlowLine(CashFlowLine) {
  console.log(CashFlowLine);
  this.CashFlowLine = ''; 
  this.display = false;
}

displayEditCashFlowLine: boolean = false;
showDialogEditCashFlowLine() {
  this.displayEditCashFlowLine = true;
}

saveEditCashFlowLine(CashFlowLine) {
  console.log(CashFlowLine);
  this.CashFlowLine = ''; 
  this.display = false;
}


itemObjectsLeft: any[] = [
  { id: 1, name: 'Suprafata', tip: '1', value: 'Text' },
  { id: 2, name: 'Agent', tip: '1', value: 'Text'   },
  { id: 3, name: 'DataEfectivaPlata', tip: '2', value: 'Date'  },
  { id: 4, name: 'ValoareEfectivaPlata', tip: '3', value: 'Numeric'  }
];

itemObjectsRight: any[] = [];

IsShow =false;
Afiseaza() {
  this.IsShow =!this.IsShow;
  
}


}
