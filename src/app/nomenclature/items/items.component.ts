import { Component, OnInit, ViewChild } from '@angular/core';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';
import {Message,MenuItem,TreeNode, Tree} from 'primeng/primeng';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ItemsComponent implements OnInit {
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
  ItemType =[];
  description: string;

  ItemName;
  IsValid = [];
  IsStockable = [];
  ItemMeasuringUnit =[];
  ItemPrice;
  ItemCurrency = [];
  VatCode =[];
  BarCode;
  ItemIerarchy;
  data =[];
  SelectedFile;

  constructor(private fb: FormBuilder) {}
  

  ngOnInit() {


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
                      "data": "Pacino Movies",
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
          'ItemCode': new FormControl(''),         
          'ItemDescription': new FormControl(''),
          'ItemType': new FormControl(''),
          'IsValid': new FormControl(''),
          'IsStockable': new FormControl(''),
          'ItemMeasuringUnit': new FormControl(''),
          'ItemPrice': new FormControl('') ,
          'ItemCurrency': new FormControl('') ,
          'VatCode': new FormControl(''),      
          'BarCode': new FormControl('') ,
          // 'ItemIerarchy': new FormControl('')       
      });

      this.ItemType = [];
      this.ItemType.push({label:'Selecteaza Tip Articol', value:''});
      this.ItemType.push({label:'Servicii', value:'Servicii'});
      this.ItemType.push({label:'Marfa', value:'Marfa'});
      this.ItemType.push({label:'Consumabile', value:'Consumabile'});
      this.IsValid = [];
      this.IsValid.push({label:'Da', value:'Da'});
      this.IsValid.push({label:'Nu', value:'Nu'});
      this.IsStockable = [];
      this.IsStockable.push({label:'Da', value:'Da'});
      this.IsStockable.push({label:'Nu', value:'Nu'});
      this.ItemMeasuringUnit = [];
      this.ItemMeasuringUnit.push({label:'Bucata', value:'Bucata'});
      this.ItemMeasuringUnit.push({label:'KG', value:'KG'});
      this.ItemMeasuringUnit.push({label:'M', value:'M'});
      this.ItemMeasuringUnit.push({label:'Fara', value:'Fara'});
      this.ItemCurrency = [];
      this.ItemCurrency.push({label:'Ron', value:'Ron'});
      this.ItemCurrency.push({label:'Eur', value:'Eur'});
      this.ItemCurrency.push({label:'Usd', value:'Usd'});
      this.VatCode = [];
      this.VatCode.push({label:'TVA19', value:'Ron'});
      this.VatCode.push({label:'TVA5', value:'Eur'});
      this.VatCode.push({label:'TVA0', value:'Usd'});
      this.VatCode.push({label:'TI19', value:'Ron'});
      this.VatCode.push({label:'TI5', value:'Eur'});
      this.BarCode = [];
    
     
  }

  onSubmit(value: string) {
      this.submitted = true;
      this.msgs = [];
      
      //this.msgs.push({severity:'info', summary:'Success'});
  }

   get diagnostic() { return JSON.stringify(this.userform.value); }

   
}

// ItemId, ItemName, ItemCode, ItemDescription,ItemType,IsValid,IsStockable,
// ItemMeasuringUnit,ItemPrice,ItemCurrency,VatCode, BarCode, ItemIerarchy, ItemProperty
