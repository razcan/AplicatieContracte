import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
alerts;
checked: boolean = false;
selectedSchType;
SchType;
nrDays;
SelectedWeekDays;
nrDaysMonth;
nrMonths;

  constructor() { 
    this.alerts = [
      {name: 'Notificare Expirare contract'},
      {name: 'Notificare Prelungire contract'},
      {name: 'Notificare Modificare contract'}
  ];
  this.SchType =[
    {label : 'Daily', value: 'a'},
    {label : 'Weekly', value: 'b'},
    {label : 'Monthly', value: 'c'}
  ]
  }

  ngOnInit() {
  }

}
