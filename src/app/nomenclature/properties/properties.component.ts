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
  PropertyType;
  property;
  PropertyTypeNew : SelectItem[];
  constructor() { }

  ngOnInit() {
    this.cols = [
      {field: 'DenumireProprietate', header: 'DenumireProprietate'},
      {field: 'CodProprietate', header: 'CodProprietate'},
      {field: 'TipProprietate', header: 'TipProprietate'}
  ];



this.property = [
      {DenumireProprietate: 'Suparafata', CodProprietate: '1', TipProprietate :"Numeric"},
      {DenumireProprietate: 'Agent', CodProprietate: '2', TipProprietate :"Text"},
      {DenumireProprietate: 'Data Reziliere', CodProprietate: '3', TipProprietate :"Date"},

  ];
  
  }
  display: boolean = false;

  showDialog() {
      this.display = true;
  }
SalveazaProprieatte(DenumireProprietate,CodProprietate,TipProprietate){
  console.log(DenumireProprietate,CodProprietate,TipProprietate);
  DenumireProprietate='';
  CodProprietate='';
  TipProprietate='';
  this.display=false;

}

}
