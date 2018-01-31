import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { HttpParams, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

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

constructor(private http: Http) {}

  ngOnInit() {
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

  title = 'app';
  from;
  to;
  Subject;
  text;

  handleUpdate() {
    console.log(this.from);
    console.log(this.to);
    console.log(this.Subject);
    console.log(this.text);
        this.http.post('http://localhost:3001/EmailSend',
            {from: this.from , to: this.to, Subject: this.Subject, text: this.text
          }).subscribe((res) => {
        const result = res.json();
      });
      }

}
