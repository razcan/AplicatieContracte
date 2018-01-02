import { Component, OnInit, AfterViewInit } from '@angular/core';
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

export class GeneralComponent implements  AfterViewInit  {

  public text: any;
  public source;
  TemplateName;
  TemplateSelectat;
  ReturnTemplateName;
  rezultat;
  numeTemplateSelectat;
  constructor(private http: Http) {}
  
RezultatFinal = [];
ContinutTemplate = [];
ngAfterViewInit() {

    this.http.get('http://localhost:3001/listTemplate').subscribe((res) => {
    const rezultat = res.json();
    this.RezultatFinal=this.rezultat;

  }
);
}

AfiseazaTemplate(){
  this.http.get('http://localhost:3001/listTemplate').subscribe((res) => {
    this.rezultat = res.json();
    this.RezultatFinal=this.rezultat;
  }
);
}

IncarcaTemplate(){
  this.http.get('http://localhost:3001/loadTemplate/'+this.numeTemplateSelectat).subscribe((res) => {
    this.rezultat = res.json();
    this.ContinutTemplate=this.rezultat;
    this.text = this.ContinutTemplate ;
    console.log(this.ContinutTemplate);
  }
);
}
filesToUpload: Array<File> = [];

upload() {
  const formData: any = new FormData();
  const files: Array<File> = this.filesToUpload;
  console.log(files);

  for(let i =0; i < files.length; i++){
      formData.append("uploads[]", files[i], files[i]['name']);
  }
  console.log('form data variable :   '+ formData.toString());
  // formData.append("uploads[]", files[0], files[0]['name']);
  // this.address.documents = files.toString();

      this.http.post('http://localhost:3001/upload', formData)
      .map(files => files.json())
      .subscribe(files => console.log('files', files))
}

fileChangeEvent(fileInput: any) {
  this.filesToUpload = <Array<File>>fileInput.target.files;
  //this.product.photo = fileInput.target.files[0]['name'];
}


SalveazaTemplate(){
  
  this.http.post('http://localhost:3001/saveTemplate', {text: this.text, TemplateName: this.TemplateName}).subscribe((res) => {
    // const result = res.json();
  });
}


display: boolean = false;

showDialog() {
    this.display = true;
}

  public onTextChange($event): void {
    this.source = $event.source;
  }

  @ViewChild('container') containerEl: ElementRef;

    private editor: Quill.Quill;
    

}
