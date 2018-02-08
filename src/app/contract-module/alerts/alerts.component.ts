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
selectedSchType;
SchType;
nrDays;
SelectedWeekDays;
nrDaysMonth = 1;
RecurentAlert;
NewAlert;
dateStart;
dateFinal;
DataAlerta;
selectedTypes;
types: SelectItem[];
raspuns;
AlertName;
AlertExist;
RecurentAlertSelect;
TabelAlerte=[];
cols = [
  {field: 'Denumire', header: 'Denumire'},
  {field: 'Catre', header: 'Catre'},
  {field: 'Subiect', header: 'Subiect'},
  {field: 'Recurenta', header: 'Recurenta'}
];
ora = '07:00';
matriceZile=[]; 
loading: boolean;


constructor(private http: Http) {}
ngAfterViewInit() {}
ListaAlerte = [];
ngOnInit() {
  this.http.get('http://localhost:3001/LoadAlert').subscribe((res) => {
    this.ListaAlerte  = res.json();
  }
);
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
    //console.log(this.AlertExist, this.RecurentAlertSelect )
      
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

  NrZileDiferenta;


SaveAlert() {


  this.TabelAlerte = [...this.TabelAlerte,{Denumire: this.AlertName, Catre: this.toEmailAddress,
    Subiect: this.Subject, Recurenta: this.RecurentAlertSelect}]
      
   // console.log(this.TabelAlerte);
    this.displayAddEmail=false;

    this.NrZileDiferenta=this.dateFinal.valueOf()-this.dateStart.valueOf();
    var diffDays1 = (this.NrZileDiferenta / (1000 * 3600 * 24))+1; 

    var months;
    months = (this.dateFinal.getFullYear() - this.dateStart.getFullYear()) * 12;
    months -= this.dateStart.getMonth() + 1;
    months += this.dateFinal.getMonth();
    months <= 0 ? 0 : months;
    months = months+2;

//console.log('Datejs:  ',this.dateStart.toLocaleDateString());

var dateobj = new Date();
function pad(n) {return n < 10 ? "0"+n : n;}
function dateModify(date) {return date.getFullYear()+"-"+pad(date.getMonth()+1)+"-"+pad(date.getDate());}
var result = pad(dateobj.getDate())+"/"+pad(dateobj.getMonth()+1)+"/"+dateobj.getFullYear();


function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function addMonth(date, months) {
  var result = new Date(date);
  result.setDate(result.getMonth() + months);
  return result;
}

   if (this.selectedSchType=='Zilnic') {
   for (let i=0;i<diffDays1;i++) {
  
this.matriceZile = [...this.matriceZile,
    {ContractId: '0',AlertId:'0', Data: this.dateStart.getFullYear()+ '-'+ pad(addDays(this.dateStart,i).getMonth()+1) + '-'
    + pad(addDays(this.dateStart,i).getDate()), Ora:this.ora, Tip: this.selectedSchType, Day: 0}];
   }
  }
  else {
    for (let i=0;i<months;i++) {
      this.matriceZile = [...this.matriceZile,{ContractId: '0',AlertId:'0', Data: this.dateStart.getFullYear()+'-'
      + pad(addMonth(this.dateStart,i).getMonth()+1+i) +'-' + pad(this.dateStart.getDate()), Ora:this.ora, Tip: this.selectedSchType, Day: this.nrDaysMonth}];  
    }
  }

// console.log(this.AlertName,this.toEmailAddress,this.cc ,this.ReplytoEmail,this.BCCtoEmail,this.Subject, this.text,
//     this.RecurentAlertSelect, this.selectedSchType,this.ora,this.DataAlerta,this.dateStart,this.dateFinal,this.nrDaysMonth);

// console.log(this.matriceZile);
// console.log( this.toEmailAddress,
//   this.cc,
//   this.ReplytoEmail,
//   this.BCCtoEmail,
//   this.Subject,
//  this.text,
//  this.RecurentAlertSelect,
//  this.selectedSchType,
//   this.ora,
//   dateModify(this.dateStart),
//   dateModify(this.dateStart),
//   dateModify(this.dateFinal),
//   this.nrDaysMonth,
// this.AlertName)

// this.http.post('http://localhost:3001/SaveAlert',{
//     toEmailAddress: this.toEmailAddress,
//     cc: this.cc,
//     ReplytoEmail: this.ReplytoEmail,
//     BCCtoEmail: this.BCCtoEmail,
//     Subject: this.Subject,
//     text: this.text,
//     RecurentAlertSelect: this.RecurentAlertSelect,
//     selectedSchType: this.selectedSchType,
//     ora: this.ora,
//     DataAlerta: dateModify(this.DataAlerta),
//     dateStart: dateModify(this.dateStart),
//     dateFinal: dateModify(this.dateFinal),
//     nrDaysMonth: this.nrDaysMonth,
//     ContractId: '5',
//     AlertName: this.AlertName,
//     matriceZile: this.matriceZile
//   }).subscribe((res) => {
//     const result = res.json();
//     console.log(result);
//   });
//  this.text,

// for (let i=0;i<this.matriceZile.length;i++) {
//   console.log(this.matriceZile[i].Data)
//  }
 
this.http.post('http://localhost:3001/SaveAlertSchedule',{
    matriceZile: this.matriceZile
    
  }).subscribe((res) => {
    const result = res.json();
    console.log(result);
  });

  //  window.location.reload(true); /Users/razvan/angular/NewProject/AplicatieContracte/src/assets
  
}

}
