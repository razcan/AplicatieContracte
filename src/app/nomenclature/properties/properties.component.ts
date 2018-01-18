import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  cols: any[];
  cars: any[];
  dialogVisible: boolean;
  constructor() { }

  ngOnInit() {
    this.cols = [
      {field: 'vin', header: 'Vin'},
      {field: 'year', header: 'Year'},
      {field: 'brand', header: 'Brand'},
      {field: 'color', header: 'Color'}
  ];

this.cars = [
      {vin: '1', year: '2015', brand :"vw", color: "red"},
      {vin: '3', year: '2017', brand :"opel", color: "green"},
      {vin: '5', year: '2018', brand :"mercedes", color: "yellow"},

  ];
  }


}
