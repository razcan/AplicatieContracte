import { Component, OnInit } from '@angular/core';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ItemsComponent implements OnInit {
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

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
      this.userform = this.fb.group({
          'ItemName': new FormControl('', Validators.required),
          'ItemCode': new FormControl(''),         
          'ItemDescription': new FormControl(''),
          'ItemType': new FormControl(''),
          'IsValid': new FormControl('', Validators.required),
          'IsStockable': new FormControl('', Validators.required),
          'ItemMeasuringUnit': new FormControl('', Validators.required),
          'ItemPrice': new FormControl('') ,
          'ItemCurrency': new FormControl('') ,
          'VatCode': new FormControl(''),           
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
