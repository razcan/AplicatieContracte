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


  constructor(private fb: FormBuilder) {}

  ngOnInit() {
      this.userform = this.fb.group({
          'ItemName': new FormControl('', Validators.required),
          'ItemCode': new FormControl('', Validators.required),         
          'ItemDescription': new FormControl(''),
          'ItemType': new FormControl('', Validators.required),
          'IsValid': new FormControl('', Validators.required)
      });

      this.ItemType = [];
      this.ItemType.push({label:'Selecteaza Tip Articol', value:''});
      this.ItemType.push({label:'Servicii', value:'Servicii'});
      this.ItemType.push({label:'Marfa', value:'Marfa'});
      this.ItemType.push({label:'Consumabile', value:'Consumabile'});
      this.IsValid = [];
      this.IsValid.push({label:'Da', value:'Da'});
      this.IsValid.push({label:'Nu', value:'Nu'});

  }

  onSubmit(value: string) {
      this.submitted = true;
      this.msgs = [];
      this.msgs.push({severity:'info', summary:'Success', detail:'Form Submitted'});
  }

  get diagnostic() { return JSON.stringify(this.userform.value); }
}

// ItemId, ItemName, ItemCode, ItemDescription,ItemType,IsValid,IsStockable,
// ItemMeasuringUnit,ItemPrice,ItemCurrency,VatCode, BarCode, ItemIerarchy, ItemProperty
