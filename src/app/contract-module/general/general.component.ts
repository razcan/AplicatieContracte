import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgModule }      from '@angular/core';
import { EditorModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { ViewChild, ElementRef } from '@angular/core';
import * as Quill from 'quill';
import {QuillModule} from 'ngx-quill';
import {FileUploadModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import { Http, HttpModule } from '@angular/http';
import { HttpParams, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {platformBrowserDynamic }    from '@angular/platform-browser-dynamic';
import {InputTextModule,DataTableModule} from 'primeng/primeng';
import {CommonModule} from '@angular/common'
// declare var Quill: any;


@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})

export class GeneralComponent implements OnInit {

  public text: string;
  public source;
  TemplateName;
  TemplateSelectat;
  ReturnTemplateName;
  display: boolean = false;
  constructor(private http: Http) {}

  ngOnInit(): void {
    this.http.get('http://localhost:3001/listTemplate').subscribe((res) => {
    const rezultat = res.json();
    console.log(rezultat);
    console.log(rezultat[0]);
    console.log(rezultat[1]);
    console.log(rezultat[2]);
    console.log(rezultat[3]);
    console.log(rezultat[4]);

    const HEROES = [
      {id: 1, name:'Superman'},
      {id: 2, name:'Batman'},
      {id: 5, name:'BatGirl'},
      {id: 3, name:'Robin'},
      {id: 4, name:'Flash'}
  ];
  console.log(HEROES);
var newData = []
for(var i = 0; i < rezultat.length; i++) {
  var value = rezultat[i];
  newData.push(value);

}
console.log(newData);
  }
);
}

SalveazaTemplate(){
  this.http.post('http://localhost:3001/saveTemplate', {text: this.text, TemplateName: this.TemplateName}).subscribe((res) => {
    // const result = res.json();
  });
}


showDialog() {
        this.display = true;
}

  public onTextChange($event): void {
    this.source = $event.source;
  }

  @ViewChild('container') containerEl: ElementRef;

    private editor: Quill.Quill;

    ngAfterViewInit() {
    }

}
