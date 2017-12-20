import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';


@Component({
  selector: 'app-purchase-invoice',
  templateUrl: './purchase-invoice.component.html',
  styleUrls: ['./purchase-invoice.component.css']
})
export class PurchaseInvoiceComponent implements OnInit {
  // colorTheme = 'theme-dark-blue';
  // minDate = new Date(2017, 5, 10);
  // maxDate = new Date(2018, 9, 15);
  // _bsValue1: Date;
  // _bsValue2: Date;
  // constructor() { }
  // get bsValue1(): Date {
  //   return this._bsValue1;
  // }
  // set bsValue1(v1: Date) {
  //   console.log(v1);
  //   this._bsValue1 = v1;
  // }
  // get bsValue2(): Date {
  //   return this._bsValue2;
  // }
  // set bsValue2(v2: Date) {
  //   console.log(v2);
  //   this._bsValue2 = v2;
  // }
  colorTheme = 'theme-green';
Left;
Right;
  itemObjectsLeft: any[] = [
    { id: 1, name: 'Windstorm', tip: 'Text' },
    { id: 2, name: 'Bombasto', tip: 'Text'  },
    { id: 3, name: 'Magneta', tip: 'Text'  }
  ];
 
  itemObjectsRight: any[] = [
    { id: 4, name: 'Tornado', tip: 'Text'  },
    { id: 5, name: 'Mr. O', tip: 'Text'  },
    { id: 6, name: 'Tomato', tip: 'Text' }
  ];


  ngOnInit() {
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
  }

  bsConfig: Partial<BsDatepickerConfig>;
 
  }

