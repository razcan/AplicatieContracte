import { Component, Input, Output, AfterViewInit, ElementRef, EventEmitter, OnChanges, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource,MatSort} from '@angular/material';
import { MatCard } from '@angular/material';
import { PageEvent} from '@angular/material';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['PartnerName', 'NrContract',  'ContractType', 'ContrDataStart', 'ContrDataFinal', 'ContrResponsible', 'Currency'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  // tslint:disable-next-line:member-ordering
  length = 100;
  // tslint:disable-next-line:member-ordering
  pageSize = 10;
  // tslint:disable-next-line:member-ordering
  pageSizeOptions = [5, 10, 25, 100];

  // MatPaginator Output
  // tslint:disable-next-line:member-ordering
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  
}


export interface Element {
  PartnerName: string;
  NrContract: string;
  ContractType: string;
  ContrDataStart: string;
  ContrDataFinal: string;
  ContrResponsible: string;
  Currency: string;
}

const ELEMENT_DATA: Element[] = [
    {
      'PartnerName': 'Tristique Industries',
      'NrContract': '1',
      'ContractType': 'Achizite',
      'ContrDataStart': '09/13/2018',
      'ContrDataFinal': '03/27/2018',
      'ContrResponsible': 'Connor',
      'Currency': '$26.22'
    },
    {
      'PartnerName': 'Consectetuer Euismod Corporation',
      'NrContract': '2341',
      'ContractType': 'Furnizare',
      'ContrDataStart': '10/03/2017',
      'ContrDataFinal': '11/15/2017',
      'ContrResponsible': 'Herrod',
      'Currency': '$89.42'
    },
    {
      'PartnerName': 'Convallis Ligula Associates',
      'NrContract': '1345',
      'ContractType': 'Furnizare',
      'ContrDataStart': '03/29/2017',
      'ContrDataFinal': '08/21/2017',
      'ContrResponsible': 'Lance',
      'Currency': '$7.78'
    },
    {
      'PartnerName': 'Non Leo LLC',
      'NrContract': '3451',
      'ContractType': 'Furnizare',
      'ContrDataStart': '01/21/2017',
      'ContrDataFinal': '10/16/2018',
      'ContrResponsible': 'Giacomo',
      'Currency': '$64.94'
    },
    {
      'PartnerName': 'Gravida Mauris Consulting',
      'NrContract': '1',
      'ContractType': 'Achizite',
      'ContrDataStart': '06/11/2018',
      'ContrDataFinal': '06/03/2018',
      'ContrResponsible': 'Burton',
      'Currency': '$51.36'
    },
    {
      'PartnerName': 'Sed Neque Limited',
      'NrContract': '5671',
      'ContractType': 'Furnizare',
      'ContrDataStart': '12/12/2016',
      'ContrDataFinal': '10/28/2018',
      'ContrResponsible': 'Rogan',
      'Currency': '$19.00'
    },
    {
      'PartnerName': 'Ante Ipsum Limited',
      'NrContract': '5671',
      'ContractType': 'Achizite',
      'ContrDataStart': '08/17/2017',
      'ContrDataFinal': '12/16/2017',
      'ContrResponsible': 'Rajah',
      'Currency': '$56.76'
    },
    {
      'PartnerName': 'Egestas Aliquam Fringilla Foundation',
      'NrContract': '7891',
      'ContractType': 'Furnizare',
      'ContrDataStart': '09/24/2017',
      'ContrDataFinal': '08/30/2017',
      'ContrResponsible': 'Mufutau',
      'Currency': '$66.85'
    },
    {
      'PartnerName': 'Id Libero Industries',
      'NrContract': '1789',
      'ContractType': 'Achizite',
      'ContrDataStart': '11/12/2018',
      'ContrDataFinal': '09/29/2018',
      'ContrResponsible': 'Richard',
      'Currency': '$94.54'
    },
    {
      'PartnerName': 'Ac Associates',
      'NrContract': '7891',
      'ContractType': 'Achizite',
      'ContrDataStart': '05/01/2017',
      'ContrDataFinal': '09/21/2018',
      'ContrResponsible': 'Mason',
      'Currency': '$57.46'
    },
    {
      'PartnerName': 'Tincidunt Nibh Phasellus Incorporated',
      'NrContract': '781',
      'ContractType': 'Achizite',
      'ContrDataStart': '03/28/2017',
      'ContrDataFinal': '06/23/2017',
      'ContrResponsible': 'Sean',
      'Currency': '$16.04'
    },
    {
      'PartnerName': 'Nullam Velit Corporation',
      'NrContract': '1789',
      'ContractType': 'Achizite',
      'ContrDataStart': '09/22/2018',
      'ContrDataFinal': '01/18/2017',
      'ContrResponsible': 'Arthur',
      'Currency': '$66.91'
    },
    {
      'PartnerName': 'Imperdiet Erat PC',
      'NrContract': '91',
      'ContractType': 'Achizite',
      'ContrDataStart': '12/18/2016',
      'ContrDataFinal': '09/23/2018',
      'ContrResponsible': 'Jack',
      'Currency': '$50.30'
    },
    {
      'PartnerName': 'Velit Eget Laoreet LLP',
      'NrContract': '71',
      'ContractType': 'Achizite',
      'ContrDataStart': '07/05/2018',
      'ContrDataFinal': '05/11/2018',
      'ContrResponsible': 'Avram',
      'Currency': '$20.87'
    },
    {
      'PartnerName': 'Et Risus Institute',
      'NrContract': '7891',
      'ContractType': 'Achizite',
      'ContrDataStart': '06/25/2018',
      'ContrDataFinal': '07/26/2017',
      'ContrResponsible': 'Kelly',
      'Currency': '$78.85'
    },
    {
      'PartnerName': 'Proin Sed Turpis Incorporated',
      'NrContract': '7891',
      'ContractType': 'Achizite',
      'ContrDataStart': '08/24/2017',
      'ContrDataFinal': '05/28/2018',
      'ContrResponsible': 'Camden',
      'Currency': '$13.70'
    },
    {
      'PartnerName': 'Donec Tincidunt PC',
      'NrContract': '871',
      'ContractType': 'Furnizare',
      'ContrDataStart': '11/07/2017',
      'ContrDataFinal': '04/28/2018',
      'ContrResponsible': 'Hashim',
      'Currency': '$71.62'
    },
    {
      'PartnerName': 'Amet Consectetuer Adipiscing Company',
      'NrContract': '91',
      'ContractType': 'Furnizare',
      'ContrDataStart': '01/14/2017',
      'ContrDataFinal': '09/22/2018',
      'ContrResponsible': 'Macaulay',
      'Currency': '$57.31'
    },
    {
      'PartnerName': 'Tristique Company',
      'NrContract': '12',
      'ContractType': 'Furnizare',
      'ContrDataStart': '06/22/2018',
      'ContrDataFinal': '12/05/2018',
      'ContrResponsible': 'Ryder',
      'Currency': '$69.42'
    },
    {
      'PartnerName': 'Ultricies Adipiscing Enim Institute',
      'NrContract': '11',
      'ContractType': 'Furnizare',
      'ContrDataStart': '08/14/2017',
      'ContrDataFinal': '05/12/2018',
      'ContrResponsible': 'Macaulay',
      'Currency': '$9.28'
    }
];