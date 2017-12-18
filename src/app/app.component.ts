import { Component } from '@angular/core';
import {ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
// import $ = require('jquery')
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  toggle(){
    $("#wrapper").toggleClass("active");
    }
  ngOnInit() {
   
  }

}
