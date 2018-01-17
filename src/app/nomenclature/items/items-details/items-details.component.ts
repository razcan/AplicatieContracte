import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';
import { Message,MenuItem,TreeNode, Tree} from 'primeng/primeng';
import { HostListener } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET } from "@angular/router";
import "rxjs/add/operator/filter";
import { NgModule }      from '@angular/core';
import { ElementRef } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { HttpParams, HttpClient } from '@angular/common/http';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-items-details',
  templateUrl: './items-details.component.html',
  styleUrls: ['./items-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ItemsDetailsComponent implements OnInit {

  key;


  msgs1: Message[];

    @ViewChild('expandingTree')
    expandingTree: Tree;
    
    filesTree11: TreeNode[];
    selectedFile2: TreeNode;
    items: MenuItem[];
    loading: boolean;

  userform: FormGroup;
  submitted: boolean;
  msgs = [];

  description: string;
  ItemName;
  ItemCode;
  ItemDescription;
  ItemType ;
  IsStockable:boolean ;
  ItemPrice;
  ItemCurrency ;
  VatCode ;
  BarCode;
  ItemIerarchy;
  data =[];
  SelectedFile;
  employeeDob;
  results;
  IsValid: boolean=true;
  ItemMeasuringUnit;
  ItemMeasuringUnitNew : SelectItem[];
  ItemTypeNew : SelectItem[];
  ItemCurrencyNew : SelectItem[];
  VatCodeNew : SelectItem[];
  ItemIerarchyNew : SelectItem[];

  constructor(private fb: FormBuilder,private http: Http, private route: ActivatedRoute,private router:Router) {}
  ngOnInit() {
    const IdRuta = this.route.snapshot.params['ItemId'];
    this.ItemId = IdRuta;
    this.http.get('http://localhost:3001/LoadItems/' + this.ItemId).subscribe((res) => {
      const results = res.json();
      this.results = results;
      if (typeof(IdRuta) !== "undefined" && IdRuta){
          this.ItemId=results[0].ItemId;
          this.ItemName=results[0].ItemName;
          this.ItemCode=results[0].ItemCode;
          this.ItemDescription=results[0].ItemDescription;
          
          if (results[0].IsValid =='true') {this.IsValid = true} else {this.IsValid = false}
          if (results[0].IsStockable =='true') {this.IsStockable = true} else {this.IsStockable = false}
          this.ItemPrice=results[0].ItemPrice;
          this.ItemCurrency=results[0].ItemCurrency;
          this.ItemCurrencyNew=[];
          this.ItemCurrencyNew.push({label: results[0].ItemCurrency ,value: results[0].ItemCurrency})
          this.ItemCurrencyNew.push({label: '---' ,value: '---'})
          this.ItemCurrencyNew.push({label: 'RON' ,value: 'RON'})
          this.ItemCurrencyNew.push({label: 'EUR' ,value: 'EUR'})
          this.ItemCurrencyNew.push({label: 'USD' ,value: 'USD'})
          this.BarCode=results[0].BarCode;  
          this.ItemMeasuringUnit=results[0].ItemMeasuringUnit;
          this.ItemMeasuringUnitNew = [];
          this.ItemMeasuringUnitNew.push({label: results[0].ItemMeasuringUnit ,value: results[0].ItemMeasuringUnit})
          this.ItemMeasuringUnitNew.push({label: '---' ,value: '---'})
          this.ItemMeasuringUnitNew.push({label:'Bucata', value:'Bucata'});
          this.ItemMeasuringUnitNew.push({label:'KG', value:'KG'});
          this.ItemMeasuringUnitNew.push({label:'M', value:'M'});
          this.ItemType=results[0].ItemType;
          this.ItemTypeNew=[];
          this.ItemTypeNew.push({label: results[0].ItemType ,value: results[0].ItemType})
          this.ItemTypeNew.push({label: '---' ,value: '---'})
          this.ItemTypeNew.push({label: 'Servicii' ,value: 'Servicii' })
          this.ItemTypeNew.push({label: 'Marfa' ,value: 'Marfa' })
          this.ItemTypeNew.push({label: 'Consumabile' ,value: 'Consumabile'})
          this.VatCode=results[0].VatCode;
          this.VatCodeNew=[];
          this.VatCodeNew.push({label: results[0].VatCode ,value: results[0].VatCode})
          this.VatCodeNew.push({label:'---', value:'---'});
          this.VatCodeNew.push({label:'TVA19', value:'TVA19'});
          this.VatCodeNew.push({label:'TVA5', value:'TVA5'});
          this.VatCodeNew.push({label:'TVA0', value:'TVA0'});
          this.VatCodeNew.push({label:'TI19', value:'TI19'});
          this.VatCodeNew.push({label:'TI5', value:'TI5'});
          this.ItemIerarchyNew=[];
          this.ItemIerarchyNew.push({label: results[0].ItemIerarchyNew ,value: results[0].ItemIerarchyNew})
          this.ItemIerarchyNew.push({label:'---', value:'---'});
          this.ItemIerarchy='Fara';
        }
      else 
          {         
            this.ItemName='';
            this.ItemCode='';
            this.ItemDescription='';
            this.ItemType='';
            this.IsValid=false;
            this.IsStockable=false;
            this.ItemMeasuringUnit='';
            this.ItemPrice='';
            this.ItemCurrency='';
            this.VatCode='';
            this.BarCode='';
            this.ItemIerarchy='Fara';
          }
    }
  );

  this.data =    [
    {
              "label": "Fara",
              "data": "Documents Folder",
              "expandedIcon": "fa-folder-open",
              "collapsedIcon": "fa-folder",   },   
    {
              "label": "Servicii",
              "data": "Documents Folder",
              "expandedIcon": "fa-folder-open",
              "collapsedIcon": "fa-folder",
              "children": [{
                      "label": "Work",
                      "data": "Work Folder",
                      "expandedIcon": "fa-folder-open",
                      "collapsedIcon": "fa-folder",
                      "children": [{"label": "Expenses", "icon": "fa-file-word-o", "data": "Expenses Document"}, {"label": "Resume", "icon": "fa-file-word-o", "data": "Resume Document"}]
                  },
                  {
                      "label": "Home",
                      "data": "Home Folder",
                      "expandedIcon": "fa-folder-open",
                      "collapsedIcon": "fa-folder",
                      "children": [{"label": "Invoices", "icon": "fa-file-word-o", "data": "Invoices for this month"}]
                  }]
          },
          {
              "label": "Marfa",
              "data": "Pictures Folder",
              "expandedIcon": "fa-folder-open",
              "collapsedIcon": "fa-folder",
              "children": [
                  {"label": "barcelona", "icon": "fa-file-image-o", "data": "Barcelona Photo"},
                  {"label": "logo", "icon": "fa-file-image-o", "data": "PrimeFaces Logo"},
                  {"label": "primeui", "icon": "fa-file-image-o", "data": "PrimeUI Logo"}]
          },
          {
              "label": "Materie Prima",
              "data": "Movies Folder",
              "expandedIcon": "fa-folder-open",
              "collapsedIcon": "fa-folder",
              "children": [{
                      "label": "Al Pacino",
                      "data": "1",
                      "children": [{"label": "Scarface", "icon": "fa-file-video-o", "data": "Scarface Movie"}, {"label": "Serpico", "icon": "fa-file-video-o", "data": "Serpico Movie"}]
                  },
                  {
                      "label": "Robert De Niro",
                      "data": "De Niro Movies",
                      "children": [{"label": "Goodfellas", "icon": "fa-file-video-o", "data": "Goodfellas Movie"}, {"label": "Untouchables", "icon": "fa-file-video-o", "data": "Untouchables Movie"}]
                  }]
          }
      ]
  }

  ItemId: number;
  ItemSave() {
    this.http.post('http://localhost:3001/SaveItem', {
    ItemId: this.ItemId,  
    ItemName: this.ItemName,  
    ItemCode: this.ItemCode,  
    ItemDescription: this.ItemDescription,  
    ItemType: this.ItemType, 
    IsValid: this.IsValid,  
    IsStockable: this.IsStockable,  
    ItemMeasuringUnit: this.ItemMeasuringUnit,  
    ItemPrice: this.ItemPrice, 
    ItemCurrency: this.ItemCurrency,
    VatCode: this.VatCode, 
    BarCode: this.BarCode,
    ItemIerarchy :this.ItemIerarchy.label,
  }).subscribe((res) => {
    const result = res.json();
    console.log(result);
  });
  }


}
