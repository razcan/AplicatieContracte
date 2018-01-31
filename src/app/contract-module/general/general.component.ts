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
      { name: '---' },
      { name: 'Sales'},
      { name: 'Acquisitions'},      
    ];

    this.statusContract = [
      { name: '---' },
      { name: 'Activ'},
      { name: 'Closed'},      
    ];

    this.department = [
      { label: '---', value: null },
      { label: 'Trading', value: 'Trading' },
      { label: 'Accounting', value: 'Accounting' },      
    ];

    this.responsible = [
      { label: '---', value: null },
      { label: 'Vasilica', value: 'Vasilica' },
      { label: 'Vetuta', value: 'Vetuta' },      
    ];

    this.expense_incomeClass = [
      { label: '---', value: null },
      { label: '706', value: '706' },
      { label: '606', value: '606' },      
    ];

    this.center = [
      { label: '---', value: null },
      { label: 'Financial', value: 'Financial' },
      { label: 'Trading', value: 'Trading' },      
    ];

    this.cfLine = [
      { label: '---', value: null },
      { label: 'Financial', value: 'Financial' },
      { label: 'Trading', value: 'Trading' },      
    ];
  }
  PartnersListResult = [];
  LL = [{label: '---', value: ''}]; 
  ListaPersoane = [] ;
  LP = [{label: '', value: ''}]; 
  ListaDepartamente = [];
  LD = [{label: '', value: ''}]; //options
  ListaCategoriiContracte = [];
  LCC = [{label: '', value: ''}]; //options
  ListaCentruCost = [];
  LCCost = [{label: '', value: ''}]; //options
  ListaCashFlowLine = [];
  LCF = [{label: '', value: ''}]; //options
  ListaClassIE = [];
  LCIE = [{label: '', value: ''}]; //options

  ngOnInit () {
    this._Nomenclatoare.getPartners().subscribe(resPartnerList => {
      this.ListaParteneri = resPartnerList;
      this.PartnersListResult = this.ListaParteneri;
      for (let i=0; i<this.PartnersListResult.length; i++) {
       this.LL.push({label: this.PartnersListResult[i].PartnerName, value: this.PartnersListResult[i].PartnerId});
      }
    }); 
   
    this._Nomenclatoare.getPersonResponsible().subscribe(resPersonResponsible => {
      this.ListaPersoane = resPersonResponsible;
      for (let i=0; i<this.ListaPersoane.length; i++) {
       this.LP.push({label: this.ListaPersoane[i].Name +' '+ this.ListaPersoane[i].Surname, value: this.ListaPersoane[i].PersonId});
      }
    }
    );
    this._Nomenclatoare.getDepartment().subscribe(resDepartment => {
      this.ListaDepartamente = resDepartment;
      for (let i=0; i<this.ListaDepartamente.length; i++) {
       this.LD.push({label: this.ListaDepartamente[i].DepartmentName, value: this.ListaDepartamente[i].DepartmentId});
      }
    }
    )
    console.log(this.ListaDepartamente);

    this._Nomenclatoare.getContractCategory().subscribe(resContractCategory => {
      this.ListaCategoriiContracte = resContractCategory;
      for (let i=0; i<this.ListaCategoriiContracte.length; i++) {
       this.LCC.push({label: this.ListaCategoriiContracte[i].ContractCategoryName, value: this.ListaCategoriiContracte[i].ContractCategoryId});
      }
    }
    )
    console.log(this.ListaCategoriiContracte);

    this._Nomenclatoare.getCostCenter().subscribe(resCostCenter => {
      this.ListaCentruCost = resCostCenter;
      for (let i=0; i<this.ListaCentruCost.length; i++) {
       this.LCCost.push({label: this.ListaCentruCost[i].CostCenterName, value: this.ListaCentruCost[i].CostCenterId});
      }
    }
    )
    console.log(this.ListaCentruCost);

    this._Nomenclatoare.getCashFlowLine().subscribe(resCashFlowLine => {
      this.ListaCashFlowLine = resCashFlowLine;
      for (let i=0; i<this.ListaCashFlowLine.length; i++) {
       this.LCF.push({label: this.ListaCashFlowLine[i].CashFlowLineName, value: this.ListaCashFlowLine[i].CashFlowLineId});
      }
    }
    )
    console.log(this.ListaCashFlowLine);

    this._Nomenclatoare.getClassIE().subscribe(resClassIE => {
      this.ListaClassIE = resClassIE;
      for (let i=0; i<this.ListaClassIE.length; i++) {
       this.LCIE.push({label: this.ListaClassIE[i].ClassIEName, value: this.ListaClassIE[i].ClassIEId});
      }
    }
    )
  }


  PartnerId;
  PartnerStatus;
  PartnerName: string;
  PartnerCode;
  PartnerInternalCode;
  PartnerType;
  ShortPartnerName;
  ComercialRegistration;
  FiscalRegistration;
  PartnerAddress;
  LegalForm;
  VATPayer;
  BankAccount;
  Delegate;
  Agent;
  BaseCurrency;
  Phone;
  WEB;
  
  displayPartner : boolean = false;
  
  showDialogPartner() {
    this.displayPartner = true;
  }
  SavePartner(PartnerId, PartnerStatus, PartnerName, PartnerCode, PartnerInternalCode, PartnerType, ShortPartnerName, ComercialRegistration, 
    FiscalRegistration, PartnerAddress, LegalForm, Notes, VATPayer, BankAccount, Delegate, Agent, BaseCurrency, Phone, Email, WEB) {
    this.http.post('http://localhost:3001/SavePartner', {
    PartnerId: this.PartnerId,  
    PartnerStatus: this.PartnerStatus , 
    PartnerName: this.PartnerName, PartnerCode: this.PartnerCode, PartnerInternalCode: this.PartnerInternalCode,
    PartnerType: this.PartnerType, ShortPartnerName: this.ShortPartnerName,
    ComercialRegistration: this.ComercialRegistration, FiscalRegistration: this.FiscalRegistration, 
    PartnerAddress: this.PartnerAddress,
    LegalForm: this.LegalForm, Notes: this.Notes, VATPayer: this.VATPayer,
    BankAccount: this.BankAccount, Delegate: this.Delegate, Agent: this.Agent,
    BaseCurrency: this.BaseCurrency, Phone: this.Phone, Email: this.Email, WEB: this.WEB,
  }).subscribe((res) => {
    const result = res.json();
    //console.log(result);
  });
  }
  
  partnerResults = [];
  Partner;
  
  showDialogForPartner(PartnerId) {
    this.displayPartner = true;
    this.http.get('http://localhost:3001/LoadPartner/' + this.PartnerId).subscribe((res) => {
        const partnerResults = res.json();
        this.PartnerId=partnerResults[0].PartnerId
        this.PartnerStatus=partnerResults[0].PartnerStatus
        this.PartnerName=partnerResults[0].PartnerName
        this.PartnerCode=partnerResults[0].PartnerCode
        this.PartnerInternalCode=partnerResults[0].PartnerInternalCode
        this.PartnerType=partnerResults[0].PartnerType
        this.ShortPartnerName=partnerResults[0].ShortPartnerName
        this.ComercialRegistration=partnerResults[0].ComercialRegistration
        this.FiscalRegistration=partnerResults[0].FiscalRegistration
        this.PartnerAddress=partnerResults[0].PartnerAddress
        this.LegalForm=partnerResults[0].LegalForm
        this.Notes=partnerResults[0].Notes
        this.VATPayer=partnerResults[0].VATPayer
        this.BankAccount=partnerResults[0].BankAccount
        this.Delegate=partnerResults[0].Delegate
        this.Agent=partnerResults[0].Agent
        this.BaseCurrency=partnerResults[0].BaseCurrency
        this.Phone=partnerResults[0].Phone
        this.Email=partnerResults[0].Email
        this.WEB=partnerResults[0].WEB
  }
  
    )}
  
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



itemObjectsRight: any[] = [];
itemObjectsLeft: any = [{PropertyId: '', PropertyName: '', PropertyType: ''}]

  TableIsShow: boolean  =false;
  displayProperties: boolean = false;
  PropertyListResult = [];
  TextProprietate = [];
  DataProprieate = [];

  TabelVisible: boolean  =false;
  showDialogProperties() {
    this.TableIsShow =true;
    this.displayProperties = true;
    this.http.get('http://localhost:3001/LoadProperty').subscribe((res) => {
    const PropertyList = res.json();
    this.PropertyListResult=PropertyList;
    for (let i=0; i<this.PropertyListResult.length; i++){
      this.itemObjectsLeft.push({
        PropertyId: this.PropertyListResult[i].PropertyId,
        PropertyName: this.PropertyListResult[i].PropertyName,
        PropertyType: this.PropertyListResult[i].PropertyType
      })
    }
  }
)}
displaycloseProperties() {
  this.TableIsShow =! this.TableIsShow;
  this.displayProperties =! this.displayProperties;
  this.itemObjectsRight= [];
  this.itemObjectsLeft = [];
}
SaveProperties() {
  this.TabelVisible  = true;
  this.displayProperties = false;
}
 
DepartmentId; // ngModel - p-dropdown
DepartmentName;  // ngModel - input p-dialog
Department; 

displayAddDepartment: boolean = false;

showDialogAddDepartament() {
  this.displayAddDepartment = true;
}

saveDepartment(DepartmentId, DepartmentName) {
  this.http.post('http://localhost:3001/SaveDepartment', {
    DepartmentId: DepartmentId,  
    DepartmentName: DepartmentName, 
  }).subscribe((res) => {
    const result = res.json();
    console.log(result);
  });
}

departmentResults = [] ;

showDialogForDepartment(Department) {
  this.displayAddDepartment = true;
  this.http.get('http://localhost:3001/LoadDepartment/' + this.Department).subscribe((res) => {
      const departmentResults = res.json();
      this.DepartmentId=departmentResults[0].DepartmentId
      this.DepartmentName=departmentResults[0].DepartmentName    
}

  )}


ContractCategoryId; // ngModel p-dropdown
ContractCategoryName; // ngModel input p-dialog
ContractCategory; 

displayAddContractCategory: boolean = false;

showDialogAddContractCategory() {
  this.displayAddContractCategory = true;
}

saveContractCategory(ContractCategoryId, ContractCategoryName) {
  this.http.post('http://localhost:3001/SaveContractCategory', {
    ContractCategoryId: ContractCategoryId,  
    ContractCategoryName: ContractCategoryName, 
  }).subscribe((res) => {
    const result = res.json();
    console.log(result);
  });
}

contractCategoryResults = [] ;

showDialogForContractCategory(ContractCategory) {
  this.displayAddContractCategory = true;
  this.http.get('http://localhost:3001/LoadContractCategory/' + this.ContractCategory).subscribe((res) => {
      const contractCategoryResults = res.json();
      this.ContractCategoryId=contractCategoryResults[0].ContractCategoryId
      this.ContractCategoryName=contractCategoryResults[0].ContractCategoryName    
}

  )}

  CostCenterId; // ngModel p-dropdown
  CostCenterName; // ngModel input p-dialog
  CostCenter; 

displayAddCostCenter: boolean = false;

showDialogAddCostCenter() {
  this.displayAddCostCenter = true;
}

saveCostCenter(CostCenterId, CostCenterName) {
  this.http.post('http://localhost:3001/SaveCostCenter', {
    CostCenterId: CostCenterId,  
    CostCenterName: CostCenterName, 
  }).subscribe((res) => {
    const result = res.json();
    console.log(result);
  });
  console.log(this.CostCenterName);
}

costCenterResults = [] ;

showDialogForCostCenter(CostCenter) {
  this.displayAddCostCenter = true;
  this.http.get('http://localhost:3001/LoadCostCenter/' + this.CostCenter).subscribe((res) => {
      const costCenterResults = res.json();
      this.CostCenterId=costCenterResults[0].CostCenterId
      this.CostCenterName=costCenterResults[0].CostCenterName    
}

  )}


CashFlowLineId; // ngModel p-dropdown
CashFlowLineName; // ngModel input p-dialog
CashFlowLine; 

displayAddCashFlowLine: boolean = false;

showDialogAddCashFlowLine() {
  this.displayAddCashFlowLine = true;
}

saveCashFlowLine(CashFlowLineId, CashFlowLineName) {
  this.http.post('http://localhost:3001/SaveCashFlowLine', {
    CashFlowLineId: CashFlowLineId,  
    CashFlowLineName: CashFlowLineName, 
  }).subscribe((res) => {
    const result = res.json();
    console.log(result);
  });
  console.log(this.CashFlowLineName);
}

cashFlowLineResults = [] ;

showDialogForCashFlowLine(CashFlowLine) {
  this.displayAddCashFlowLine = true;
  this.http.get('http://localhost:3001/LoadCashFlowLine/' + this.CashFlowLine).subscribe((res) => {
      const cashFlowLineResults = res.json();
      this.CashFlowLineId=cashFlowLineResults[0].CashFlowLineId
      this.CashFlowLineName=cashFlowLineResults[0].CashFlowLineName    
}

  )}

ClassIEId; // ngModel - p-dropdown
ClassIEName;  // ngModel - input p-dialog
ClassIE; 

displayAddClassIE: boolean = false;

showDialogAddCalssIE() {
  this.displayAddClassIE = true;
}

saveClassIE(ClassIEId, ClassIEName) {
  this.http.post('http://localhost:3001/SaveClassIE', {
    ClassIEId: ClassIEId,  
    ClassIEName: ClassIEName, 
  }).subscribe((res) => {
    const result = res.json();
    console.log(result);
  });
}

classIEResults = [] ;

showDialogForClassIE(ClassIE) {
  this.displayAddClassIE = true;
  this.http.get('http://localhost:3001/LoadClass/' + this.ClassIE).subscribe((res) => {
      const classIEResults = res.json();
      this.ClassIEId=classIEResults[0].ClassIEId
      this.ClassIEName=classIEResults[0].ClassIEName    
}

  )}


FormValidationErrPartener = 0;
FormValidationErrType = 0;
FormValidationErrStatus= 0;
ContractSave() {

  if(this.PartnerId) {
//    console.log("I have something");
    this.FormValidationErrPartener = 0;

  } else {
 //   console.log("Nothing here...");
    this.FormValidationErrPartener = 1;

  }

  if(this.ContractType) {
        this.FormValidationErrType = 0;
    
    } else {
      this.FormValidationErrType = 1;
  
    }

  if(this.ContractStatus) {
        this.FormValidationErrStatus = 0;
    
    } else {
      this.FormValidationErrStatus = 1;
  
    }
      

  

  // console.log(this.PartnerId, this.ContractType.name,this.ContractNumber, this.ContractCode, this.SigningDate,
  //   this.StartDate, this.EndDate, this.ContractStatus.name, this.ContractDescription)
}

}
