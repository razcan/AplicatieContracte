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
  BarCodeNew = [];
  IsValid: boolean;
  ItemMeasuringUnit;
  ItemMeasuringUnitNew =[];
  ItemTypeNew= [];
  ItemCurrencyNew =[];
  VatCodeNew=[];

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
          this.ItemType=results[0].ItemType;
          if (results[0].IsValid =='true') {this.IsValid = true} else {this.IsValid = false}
          if (results[0].IsStockable =='true') {this.IsStockable = true} else {this.IsStockable = false}
          this.ItemPrice=results[0].ItemPrice;
          this.ItemCurrency=results[0].ItemCurrency;
          this.ItemCurrencyNew=[];
          this.ItemCurrencyNew.push({label: results[0].ItemCurrencyNew ,value: results[0].ItemCurrency})
          this.ItemCurrencyNew.push({label: '---' ,value: '---'})
          this.ItemCurrencyNew.push({label: 'RON' ,value: 'RON'})
          this.ItemCurrencyNew.push({label: 'EUR' ,value: 'EUR'})
          this.ItemCurrencyNew.push({label: 'USD' ,value: 'USD'})
          this.VatCode=results[0].VatCode;
          this.BarCode=results[0].BarCode;  
          this.BarCodeNew=[]; 
          this.BarCodeNew.push({label: results[0].BarCode, value: results[0].BarCode});
          this.ItemMeasuringUnitNew = [];
          this.ItemMeasuringUnitNew.push({label: 'ItemMeasuringUnit' ,value: results[0].ItemMeasuringUnit})
          this.ItemMeasuringUnitNew.push({label: '---' ,value: '---'})
          this.ItemMeasuringUnitNew.push({label:'Bucata', value:'Bucata'});
          this.ItemMeasuringUnitNew.push({label:'KG', value:'KG'});
          this.ItemMeasuringUnitNew.push({label:'M', value:'M'});
          this.ItemTypeNew=[];
          this.ItemTypeNew.push({label: 'ItemMeasuringUnit' ,value: results[0].ItemType})
          this.ItemTypeNew.push({label: '---' ,value: '---'})
          this.ItemTypeNew.push({label: 'Servicii' ,value: 'Servicii' })
          this.ItemTypeNew.push({label: 'Marfa' ,value: 'Marfa' })
          this.ItemTypeNew.push({label: 'Consumabile' ,value: 'Consumabile'})

        }
      else 
          {         
            this.ItemName='';
            this.ItemCode='';
            this.ItemDescription='';
            this.ItemType='';
            this.IsValid=false;
       //     this.IsStockable='';
        //    this.ItemMeasuringUnit='';
            this.ItemPrice='';
            this.ItemCurrency='';
            this.VatCode='';
            this.BarCode='';
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

  // console.log(this.data[0].label);
  
      this.userform = this.fb.group({
          'ItemName': new FormControl('', Validators.required),
          'ItemCode': new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)])),         
          'ItemDescription': new FormControl(''),
          'ItemType': new FormControl('',Validators.required),
          'IsStockable': new FormControl('',Validators.required),
          'ItemMeasuringUnit': new FormControl('',Validators.required),
          'ItemPrice': new FormControl('',Validators.required) ,
          'ItemCurrency': new FormControl('',Validators.required) ,
          'VatCode': new FormControl('',Validators.required),      
          'BarCode': new FormControl('')   
      });

     
      this.ItemMeasuringUnit = [];
      this.ItemMeasuringUnit.push({label:'---', value:''});
      this.ItemMeasuringUnit.push({label:'Bucata', value:'Bucata'});
      this.ItemMeasuringUnit.push({label:'KG', value:'KG'});
      this.ItemMeasuringUnit.push({label:'M', value:'M'});
      this.ItemMeasuringUnit.push({label:'Fara', value:'Fara'});
      this.ItemCurrency = [];
      this.ItemCurrency.push({label:'---', value:''});
      this.ItemCurrency.push({label:'Ron', value:'Ron'});
      this.ItemCurrency.push({label:'Eur', value:'Eur'});
      this.ItemCurrency.push({label:'Usd', value:'Usd'});
      this.VatCode = [];
      this.VatCode.push({label:'---', value:''});
      this.VatCode.push({label:'TVA19', value:'Ron'});
      this.VatCode.push({label:'TVA5', value:'Eur'});
      this.VatCode.push({label:'TVA0', value:'Usd'});
      this.VatCode.push({label:'TI19', value:'Ron'});
      this.VatCode.push({label:'TI5', value:'Eur'});

     
  }
  ItemId: number;
  ItemSave() {
    this.http.post('http://localhost:3001/SaveItem', {
    ItemId: this.ItemId,  
    ItemName: this.userform.value.ItemName,  
    ItemCode: this.userform.value.ItemCode,  
    ItemDescription: this.userform.value.ItemDescription,  
    ItemType: this.userform.value.ItemType, 
    IsStockable: this.userform.value.IsStockable,  
    ItemMeasuringUnit: this.userform.value.ItemMeasuringUnit,  
    ItemPrice: this.userform.value.ItemPrice, 
    ItemCurrency: this.userform.value.ItemCurrency,
    VatCode: this.userform.value.VatCode, 
    BarCode: this.userform.value.BarCode,
    ItemIerarchy :this.ItemIerarchy.label,
  }).subscribe((res) => {
    const result = res.json();
    //console.log(result);
  });
  }


}
