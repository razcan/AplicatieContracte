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
import { Observable } from 'rxjs/Observable';


// declare var Quill: any;


@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})

export class GeneralComponent implements  AfterViewInit  {
  
  display: boolean = false;
  display2: boolean = false;
  public text: any;
  public source;
  TemplateName;
  TemplateSelectat;
  ReturnTemplateName;
  rezultat;
  FilesList;
  numeTemplateSelectat;
  FisierSelectat;
  constructor(private http: Http) {}
  
RezultatFinal = false;
ContinutTemplate = [];
public FilesListResult =[];
public filesListResultObservable : Observable<any>  ;
public ListaFisiere = [];


ngOnInit(){
  this.AfiseazaTemplate();
  this.filesListResultObservable =this.http.get('http://localhost:3001/loadAttachments').map(it => it.json());
}

ngAfterViewInit() {
}

// StergeFisier(FisierDeSters){
//   //alert('http://localhost:3001/StergeFisier/'+FisierDeSters);
//   var DoarDenumirefisier=(FisierDeSters.substring(64, 200));
//   var filerequest = 'http://localhost:3001/StergeFisier'+'/'+DoarDenumirefisier;
//   window.open(filerequest,"_parent");
//   window.close();
// }

StergeFisier2(FisierDeSters){
  //var DoarDenumirefisier=(FisierDeSters.substring(64, 200));
  var filerequest = 'http://localhost:3001/StergeFisier'+'/'+FisierDeSters;
  console.log(filerequest);
  this.http.get(filerequest).subscribe();
  this.display2 = false;
  
}


DownloadFisier(FisierSelectat){
  //var DoarDenumirefisier=(FisierSelectat.substring(64, 200));
 // alert('http://localhost:3001/downloadFileAttached'+'/'+DoarDenumirefisier);
  // this.http.get('http://localhost:3001/downloadFileAttached'+'/'+DoarDenumirefisier)
var filerequest = 'http://localhost:3001/downloadFileAttached/'+FisierSelectat;
window.open(filerequest,"_parent");

}

AfiseazaListaFisiere(){
  this.http.get('http://localhost:3001/loadAttachments').subscribe((res) => {
    const FilesList = res.json();
    this.FilesListResult=FilesList;
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




showDialog() {
    this.display = true;
}
showDialog2() {
  this.display2 = true;
}

  public onTextChange($event): void {
    this.source = $event.source;
  }

  @ViewChild('container') containerEl: ElementRef;

    private editor: Quill.Quill;
    

}
