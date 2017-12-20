import { Component } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { OnInit,ViewChild,AfterViewInit,ElementRef,OnDestroy,OnChanges,ChangeDetectionStrategy,Input } from '@angular/core';



@Component({
  selector: 'app-purchase-invoice',
  templateUrl: './purchase-invoice.component.html',
  styleUrls: ['./purchase-invoice.component.css']
})
export class PurchaseInvoiceComponent implements OnInit,AfterViewInit {
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
    { id: 1, name: 'Suprafata', tip: 'Text', value: 'Text' },
    { id: 2, name: 'Agent', tip: 'Text', value: 'Text'   },
    { id: 3, name: 'DataEfectivaPlata', tip: 'Date', value: 'Date'  },
    { id: 3, name: 'ValoareEfectivaPlata', tip: 'Numeric', value: 'Numeric'  }
  ];
 
  itemObjectsRight: any[] = [
   
  ];

  // myFunction() {
  //   var node = document.createElement("LI");
  //   var textnode = document.createTextNode("Water");
  //   node.appendChild(textnode);
  //   document.getElementById("myList").appendChild(node);
  //   var x = document.createElement("INPUT");
  //   x.setAttribute("type", "text");
  //   document.getElementById("myList").appendChild(x);
  // }
  @ViewChild('someInput') someInput: ElementRef;

  ngAfterViewInit() {
    this.someInput.nativeElement.value = "Anchovies! 🍕🍕";
  }

  ngOnInit() {
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
  }

  bsConfig: Partial<BsDatepickerConfig>;
 
  }

