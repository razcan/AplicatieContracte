import { Component } from '@angular/core';
import {ViewChild, ElementRef, AfterViewInit, NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import {FormControl} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import {PanelMenuModule,MenuItem,TabViewModule} from 'primeng/primeng';
// import $ = require('jquery')
// import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  items: MenuItem[];
  visibleSidebar1;

  toggle(){
    $("#wrapper").toggleClass("active");
    }

      htmlbodyHeightUpdate(){
      var height3 = $( window ).height()
      var height1 = $('.nav').height()+50
      var height2 = $('.main').height()
      if(height2 > height3){
        $('html').height(Math.max(height1,height3,height2)+10);
        $('body').height(Math.max(height1,height3,height2)+10);
      }
      else
      {
        $('html').height(Math.max(height1,height3,height2));
        $('body').height(Math.max(height1,height3,height2));
      }
      
    }
    

  ngOnInit() {
    
  }

}
