import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {TerminalService} from 'primeng/components/terminal/terminalservice';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.css']
})
export class FinancialComponent implements OnInit {

  currency;
  selectedCurrency;
  rateVAT;
  selectedRateVAT;
  invoicingInterval;
  invoicingFrequency;
  paymentInstrument;
  ContractObject;
  Currency;
  VATRate;
  ValuewoVAT;
  ValuewithVAT;
  InvoicingInterval;
  InvoicingFrequency;
  InvoicingDay;
  DueDays;
  PayInstrument;
  PenaltyRate;
  BaseCurrency;

  
  constructor() { 
    this.currency = [
      { name: '---'},
      { name: 'EUR'},
      { name: 'RON'},      
    ];
    this.rateVAT = [
      { name: '---'},
      { name: '19'},
      { name: '9'},      
    ];

    this.invoicingInterval = [
      { name: '---'},
      { name: 'Monthly'},
      { name: 'Quarterly'},      
    ];

    this.invoicingFrequency = [
      { name: '---'},
      { name: '1'},
      { name: '3'},      
    ];

    this.paymentInstrument = [
      { name: '---'},
      { name: 'BO'},
      { name: 'OP'},      
    ];
  }

  ngOnInit() {
    
  }

  displayItem: boolean = false;

showDialogItem() {
  this.displayItem = true;
}

  

}
