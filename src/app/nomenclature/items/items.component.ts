import { Component, OnInit } from '@angular/core';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  userform: FormGroup;
  submitted: boolean;
  msgs = [];
  genders = [];
  description: string;

  ItemName;
   
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
      this.userform = this.fb.group({
          'denumire': new FormControl('', Validators.required),
          'lastname': new FormControl('', Validators.required),
          'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
          'description': new FormControl(''),
          'gender': new FormControl('', Validators.required)
      });

      this.genders = [];
      this.genders.push({label:'Select Gender', value:''});
      this.genders.push({label:'Male', value:'Male'});
      this.genders.push({label:'Female', value:'Female'});
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
