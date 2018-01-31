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
nrDaysMonth = 1;
nrMonths;
NewAlert;
RecurentAlert;
constructor(private http: Http) {}

  ngOnInit() {
    this.alerts = [
      {name: 'Notificare Expirare contract'},
      {name: 'Notificare Prelungire contract'},
      {name: 'Notificare Modificare contract'}
  ];
  this.SchType =[
    {label : 'Zilnic', value: 'Zilnic'},
    // {label : 'Weekly', value: 'b'},
    {label : 'Lunar', value: 'Lunar'}]
    this.NewAlert = [{ label: 'Da', value: 'a' },{ label: 'Nu', value: 'b' }]
    this.RecurentAlert = [{ label: 'Da', value: 'yes' },{ label: 'Nu', value: 'no' }]
  }


  text;
  Subject;
  BCCtoEmail;
  ReplytoEmail;
  fromEmailAddress;
  toEmailName; 
  toEmailAddress;
  cc;

  displayAddEmail: boolean = false;
  displayEmail() {
    this.displayAddEmail = true;
  }

  TestEmailSend() {
        this.http.post('http://localhost:3001/EmailSend',
            {from: this.cc , to: this.toEmailAddress, Subject: this.Subject, text: this.text, bcc: this.BCCtoEmail, cc: this.cc
          }).subscribe((res) => {
        const result = res.json();
      });
      }

}
