import { Component, Input, Output, AfterViewInit, ElementRef, EventEmitter, OnChanges, OnInit,ViewChild, NgModule } from '@angular/core';
import { MatTableDataSource,MatSort} from '@angular/material';
import { MatCard } from '@angular/material';
import { PageEvent} from '@angular/material';
import { RouterModule, Routes, Router } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {DialogModule} from 'primeng/primeng';
import { ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET } from "@angular/router";
import "rxjs/add/operator/filter";
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {Injectable} from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent   {

display: boolean = false;

refresh(): void {
  window.location.reload();
}

// pentru incarcarea datelor partenerului in modal
DoNotshowDialog() {
  this.display = false;
}

PartenerIdForDelete ;
PartnerNameForDelete : string ='' ;

onClick(event, partners){
  this.display = true;
  this.PartenerIdForDelete = partners.PartnerId;
  this.PartnerNameForDelete = partners.PartnerName;
 
}
// pentru incarcarea datelor partenerului in modal

public PartnerList : Observable<any>  ;
public PartnersListResult =[];
constructor (private http: Http,private router: Router) {}
  

ngOnInit() {
  this.PartnerList =this.http.get('http://localhost:3001/LoadPartners').map(it => it.json());    

  this.http.get('http://localhost:3001/LoadPartners').subscribe((res) => {
    const FilesList = res.json();
    this.PartnersListResult=FilesList;
  }
);


}

onRowSelect(event) {
  this.router.navigate(['nomenclature/partners/partners-details/'+event.data.PartnerId])
  // console.log(event.data.PartnerId);
}

PartnerEdit(PartnerId) {
  this.router.navigate(['nomenclature/partners/partners-details/'+PartnerId])
}

PartnerDelete(PartnerId) {
  this.http.post('http://localhost:3001/DeletePartner/' +PartnerId, {
}).subscribe((res) => {
  const result = res.json();
  window.location.reload(true);
  //console.log(result);
});


}
}
