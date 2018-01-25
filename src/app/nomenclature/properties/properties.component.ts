import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';
import { Message,MenuItem,TreeNode, Tree} from 'primeng/primeng';
import { HostListener } from '@angular/core';
import { Component, Input, Output, AfterViewInit, ElementRef, EventEmitter, OnChanges, OnInit,ViewChild, NgModule } from '@angular/core';
import { PageEvent} from '@angular/material';
import { RouterModule, Routes, Router } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {DialogModule} from 'primeng/primeng';
import { ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET } from "@angular/router";
import "rxjs/add/operator/filter";
import {Injectable} from '@angular/core';
import { SelectItem } from 'primeng/primeng';
@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PropertiesComponent implements OnInit {

  cols: any[];
  dialogVisible: boolean;
  row: any[];
  property;
  PropertyTypeNew : SelectItem[];
  PropertyList;
  PropertyListResult;
  DenumireProprietate;
  CodProprietate;
  TipProprietate;

  constructor (private http: Http,private router: Router) {}
  ngOnInit() {

    this.http.get('http://localhost:3001/LoadProperty').subscribe((res) => {
      const PropertyList = res.json();
      for (let i in PropertyList)
      {
        PropertyList[i].deleted='0'
        PropertyList[0].deleted='1'
    }  
      this.PropertyListResult=PropertyList;
     
    }
  );
  
  }
DDelete: boolean = true;
  display: boolean = false;

  showDialog() {
      this.display = true;
  }

SalveazaProprietatea(){
  this.http.post('http://localhost:3001/SaveProperty', {
    PropertyName: this.DenumireProprietate,  
    PropertyCode: this.CodProprietate,  
    PropertyType: this.TipProprietate
  }).subscribe((res) => {
    const result = res.json();
  });

this.DenumireProprietate ='';
this.CodProprietate = '';
this.TipProprietate ='';
window.location.reload(true);
this.display=false;
}

EditeazaProprietatea(PropertyId,PropertyName,PropertyCode,PropertyType){
  this.http.post('http://localhost:3001/SaveProperty', {
    PropertyId: PropertyId,
    PropertyName: PropertyName,  
    PropertyCode: PropertyCode,  
    PropertyType: PropertyType
  }).subscribe((res) => {
    const result = res.json();
  });
   window.location.reload(true);
}

StergeProprietatea(PropertyId){
  this.http.post('http://localhost:3001/DeleteProperty', {
    PropertyId: PropertyId
  }).subscribe((res) => {
    const result = res.json();
  });
   window.location.reload(true);
}

}
