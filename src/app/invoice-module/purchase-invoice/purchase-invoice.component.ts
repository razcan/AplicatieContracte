import { Component } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { OnInit,ViewChild,AfterViewInit,ElementRef,Renderer2,OnDestroy,OnChanges,ChangeDetectionStrategy,Input } from '@angular/core';
import { BootstrapSwitchModule } from 'angular2-bootstrap-switch';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/primeng';

@Component({
  selector: 'app-purchase-invoice',
  templateUrl: './purchase-invoice.component.html',
  styleUrls: ['./purchase-invoice.component.css']
})
export class PurchaseInvoiceComponent implements OnInit,AfterViewInit {
  // colorTheme = 'theme-dark-blue';
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  colorTheme = 'theme-green';

Left;
Right;

TextProprietate=[];
DataProprieate=[];

  itemObjectsLeft: any[] = [
    { id: 1, name: 'Suprafata', tip: '1', value: 'Text' },
    { id: 2, name: 'Agent', tip: '1', value: 'Text'   },
    { id: 3, name: 'DataEfectivaPlata', tip: '2', value: 'Date'  },
    { id: 4, name: 'ValoareEfectivaPlata', tip: '3', value: 'Numeric'  }
  ];
 
  itemObjectsRight: any[] = [];

  IsShow =false;
  Picker;

  Afiseaza() {
    this.IsShow =!this.IsShow;
    
  }

  @ViewChild('someInput') someInput: ElementRef;

  ngAfterViewInit() {

  }

  ngOnInit() {
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
  }

  bsConfig: Partial<BsDatepickerConfig>;
 
  }

