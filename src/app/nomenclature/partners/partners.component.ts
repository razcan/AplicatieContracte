import { Component, Input, Output, AfterViewInit, ElementRef, EventEmitter, OnChanges, OnInit,ViewChild, NgModule } from '@angular/core';
import { MatTableDataSource,MatSort} from '@angular/material';
import { MatCard } from '@angular/material';
import { PageEvent} from '@angular/material';
import { RouterModule, Routes, Router } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent   {

public PartnerList : Observable<any>  ;

constructor (private http: Http,private router: Router) {}
  
ngOnInit() {
  this.PartnerList =this.http.get('http://localhost:3001/LoadPartners').map(it => it.json());    
  }

PartnerEdit(PartnerId) {
  this.router.navigate(['nomenclature/partners/partners-details/'+PartnerId])
}

}

//   @ViewChild(MatSort) sort: MatSort;

//   displayedColumns = ['PartnerStatus', 'PartnerName',  'PartnerCode', 'PartnerType', 'FiscalRegistration', 'PartnerAddress', 'LegalForm'];
//   dataSource = new MatTableDataSource(ELEMENT_DATA);

//   applyFilter(filterValue: string) {
//     filterValue = filterValue.trim(); // Remove whitespace
//     filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
//     this.dataSource.filter = filterValue;
//   }
  
//   // tslint:disable-next-line:use-life-cycle-interface
//   ngAfterViewInit() {
//     this.dataSource.sort = this.sort;
//   }
//   // tslint:disable-next-line:member-ordering
//   length = 100;
//   // tslint:disable-next-line:member-ordering
//   pageSize = 10;
//   // tslint:disable-next-line:member-ordering
//   pageSizeOptions = [5, 10, 25, 100];

//   // MatPaginator Output
//   // tslint:disable-next-line:member-ordering
//   pageEvent: PageEvent;

//   setPageSizeOptions(setPageSizeOptionsInput: string) {
//     this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
//   }

//   onSelect(PartnerCode) {
//     this.router.navigate(['nomenclature/partners/partners-details/',PartnerCode]);
//    }


// }


// export interface Element {

//   PartnerStatus : string;
//   PartnerName : string;
//   PartnerCode : string;
//   PartnerType : string;
//   FiscalRegistration : string;
//   PartnerAddress : string;
//   LegalForm: string;
// }


// const ELEMENT_DATA: Element[] = [
//   {
//     'PartnerStatus': 'Inactive',
//     'PartnerName': 'Molestie Dapibus Ligula Consulting',
//     'PartnerCode': '1270',
//     'PartnerType': 'Client',
//     'FiscalRegistration': '8021',
//     'PartnerAddress': 'P.O. Box 797, 9554 Nibh. Rd.',
//     'LegalForm': 'SRL'
//   },
//   {
//     'PartnerStatus': 'Active',
//     'PartnerName': 'Ornare Tortor At Corp.',
//     'PartnerCode': '23432',
//     'PartnerType': 'Client',
//     'FiscalRegistration': '23423',
//     'PartnerAddress': 'P.O. Box 797, 9554 Nibh. Rd.',
//     'LegalForm': 'SRL'
//   },
//   {
//     'PartnerStatus': 'Active',
//     'PartnerName': 'Molestie Dapibus Ligula Consulting',
//     'PartnerCode': '1270',
//     'PartnerType': 'Client',
//     'FiscalRegistration': '8021',
//     'PartnerAddress': 'P.O. Box 797, 9554 Nibh. Rd.',
//     'LegalForm': 'SRL'
//   },
//   {
//     'PartnerStatus': 'Inactive',
//     'PartnerName': 'Molestie Dapibus Ligula Consulting',
//     'PartnerCode': '1270',
//     'PartnerType': 'Client',
//     'FiscalRegistration': '8021',
//     'PartnerAddress': 'P.O. Box 797, 9554 Nibh. Rd.',
//     'LegalForm': 'SRL'
//   },
//   {
//     'PartnerStatus': 'Active',
//     'PartnerName': 'Molestie Dapibus Ligula Consulting',
//     'PartnerCode': '1270',
//     'PartnerType': 'Client',
//     'FiscalRegistration': '8021',
//     'PartnerAddress': 'P.O. Box 797, 9554 Nibh. Rd.',
//     'LegalForm': 'SRL'
//   },
//   {
//     'PartnerStatus': 'Inactive',
//     'PartnerName': 'Erat Eget Ipsum Corporation',
//     'PartnerCode': '1270',
//     'PartnerType': 'Client',
//     'FiscalRegistration': '8021',
//     'PartnerAddress': 'P.O. Box 797, 9554 Nibh. Rd.',
//     'LegalForm': 'SRL'
//   },
//   {
//     'PartnerStatus': 'Inactive',
//     'PartnerName': 'Convallis PC',
//     'PartnerCode': '1270',
//     'PartnerType': 'Client',
//     'FiscalRegistration': '8021',
//     'PartnerAddress': 'P.O. Box 797, 9554 Nibh. Rd.',
//     'LegalForm': 'SRL'
//   },
//   {
//     'PartnerStatus': 'Inactive',
//     'PartnerName': 'Ornare Tortor At Corp.',
//     'PartnerCode': '1270',
//     'PartnerType': 'Client',
//     'FiscalRegistration': '8021',
//     'PartnerAddress': 'P.O. Box 797, 9554 Nibh. Rd.',
//     'LegalForm': 'SRL'
//   },
//   {
//     'PartnerStatus': 'Inactive',
//     'PartnerName': 'Molestie Dapibus Ligula Consulting',
//     'PartnerCode': '1270',
//     'PartnerType': 'Client',
//     'FiscalRegistration': '8021',
//     'PartnerAddress': 'P.O. Box 797, 9554 Nibh. Rd.',
//     'LegalForm': 'SRL'
//   },
//   {
//     'PartnerStatus': 'Inactive',
//     'PartnerName': 'Molestie Dapibus Ligula Consulting',
//     'PartnerCode': '1270',
//     'PartnerType': 'Client',
//     'FiscalRegistration': '8021',
//     'PartnerAddress': 'P.O. Box 797, 9554 Nibh. Rd.',
//     'LegalForm': 'SRL'
//   },
//   {
//     'PartnerStatus': 'Inactive',
//     'PartnerName': 'Molestie Dapibus Ligula Consulting',
//     'PartnerCode': '1270',
//     'PartnerType': 'Client',
//     'FiscalRegistration': '8021',
//     'PartnerAddress': 'P.O. Box 797, 9554 Nibh. Rd.',
//     'LegalForm': 'SRL'
//   },
//   {
//     'PartnerStatus': 'Inactive',
//     'PartnerName': 'Molestie Dapibus Ligula Consulting',
//     'PartnerCode': '1270',
//     'PartnerType': 'Client',
//     'FiscalRegistration': '8021',
//     'PartnerAddress': 'P.O. Box 797, 9554 Nibh. Rd.',
//     'LegalForm': 'SRL'
//   },
//   {
//     'PartnerStatus': 'Active',
//     'PartnerName': 'Molestie Dapibus Ligula Consulting',
//     'PartnerCode': '1270',
//     'PartnerType': 'Client',
//     'FiscalRegistration': '8021',
//     'PartnerAddress': 'P.O. Box 797, 9554 Nibh. Rd.',
//     'LegalForm': 'SRL'
//   },
// ]
  