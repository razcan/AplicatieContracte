import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
alerts;
checked;
selectedSchType;
SchType;
nrDays;

  constructor() { 
    this.alerts = [
      {name: 'Notificare Expirare contract'},
      {name: 'Notificare Prelungire contract'},
      {name: 'Notificare Modificare contract'}
  ];
  this.SchType =[
    {label : 'Daily', value: '1'},
    {label : 'Weekly', value: '2'},
    {label : 'Monthly', value: '3'}
  ]
  }

  ngOnInit() {
  }

}
