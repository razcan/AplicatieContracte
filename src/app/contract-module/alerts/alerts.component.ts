import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { HttpParams, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { ChangeDetectorRef, Input, ChangeDetectionStrategy} from '@angular/core';
import { AfterViewInit } from '@angular/core';
import {SelectItem} from 'primeng/primeng';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})

export class AlertsComponent implements AfterViewInit {
alerts;
selectedSchType: boolean=false;
SchType;
nrDays;
SelectedWeekDays;
nrDaysMonth = 1;
nrMonths;
RecurentAlert;
NewAlert;
dateStart;
dateFinal;
DataAlerta;
selectedTypes;
types: SelectItem[];
raspuns;
SelectedAlerts;
AlertExist;
RecurentAlertSelect;
TabelAlerte=[];
cols = [
  {field: 'Denumire', header: 'Denumire'},
  {field: 'Catre', header: 'Catre'},
  {field: 'Subiect', header: 'Subiect'},
  {field: 'Recurenta', header: 'Recurenta'}
];
ora;

//this.TabelAlerte.push({Denumire: '1', Catre: '2',Subiect: '3',Recurenta: '4'});
//TabelAlerte=[{Denumire: '1', Catre: '2',Subiect: '3',Recurenta: '4'}]     

constructor(private http: Http) {
 
}

ngAfterViewInit() {
  
}

loading: boolean;

  ngOnInit() {
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

    setTimeout(() => {
    console.log(this.AlertExist, this.RecurentAlertSelect )

      this.types= [{ label: 'Da', value: 'yes' },{ label: 'Nu', value: 'no' }]
      this.alerts =[{label : 'Expirare contract', value: '1'},
      {label : 'Prelungire contract', value: '2'},
      {label : 'Modificare contract', value: '3'}]
    this.SchType =[{label : 'Zilnic', value: 'Zilnic'},{label : 'Lunar', value: 'Lunar'}]
    this.RecurentAlert = [{ label: 'Da', value: 'yes' },{ label: 'Nu', value: 'no' }]

    this.loading = false;
 
    }, 1000);
  }

  TestEmailSend() {
        this.http.post('http://localhost:3001/EmailSend',
            {from: this.cc , to: this.toEmailAddress, Subject: this.Subject, text: this.text, bcc: this.BCCtoEmail, cc: this.cc
          }).subscribe((res) => {
        const result = res.json();
      });
      }

  SaveAlert() {
  //  console.log(this.cc ,this.toEmailAddress,this.Subject, this.text,this.BCCtoEmail,this.cc, 
  //   this.toEmailName,this.ReplytoEmail, this.RecurentAlertSelect, this.selectedSchType, this.nrDaysMonth, this.SelectedAlerts,
  //   this.dateStart,this.dateFinal,this.DataAlerta);
       

this.TabelAlerte = [...this.TabelAlerte,{Denumire: this.SelectedAlerts, Catre: this.toEmailAddress,
    Subiect: this.Subject, Recurenta: this.RecurentAlertSelect}]
      
    console.log(this.TabelAlerte);
    this.displayAddEmail=false;

  //  window.location.reload(true);
  
}
  filter = false;

  // onFilterChange(eve: any) {
  //   this.filter = !this.filter;
  // }

}
