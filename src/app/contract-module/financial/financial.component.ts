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


  
  constructor() { 
    this.currency = [
      { name: 'Select Currency'},
      { name: 'EUR'},
      { name: 'RON'},      
    ];
    this.rateVAT = [
      { name: 'Select VATRate'},
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
      { name: 'Select PaymentInstrument'},
      { name: 'BO'},
      { name: 'OP'},      
    ];
  }

  ngOnInit() {
  }

}
