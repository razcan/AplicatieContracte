import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';
import {Message,MenuItem,TreeNode, Tree} from 'primeng/primeng';
import { HostListener } from '@angular/core';
import { Component, Input, Output, AfterViewInit, ElementRef, EventEmitter, OnChanges, OnInit,ViewChild, NgModule } from '@angular/core';
import { MatTableDataSource,MatSort} from '@angular/material';
import { MatCard } from '@angular/material';
import { PageEvent} from '@angular/material';
import { RouterModule, Routes, Router } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {DialogModule} from 'primeng/primeng';
import { ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET } from "@angular/router";
import "rxjs/add/operator/filter";
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {Injectable} from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ItemsComponent implements OnInit {

    display: boolean = false;

    refresh(): void {
      window.location.reload();
    }
    
    // pentru incarcarea datelor partenerului in modal
    DoNotshowDialog() {
      this.display = false;
    }
    
    PartenerIdForDelete ;
    PartnerNameForDelete : string ='' ;
    
    onClick(event, partners){
      this.display = true;
      this.PartenerIdForDelete = partners.PartnerId;
      this.PartnerNameForDelete = partners.PartnerName;
     
    }
    // pentru incarcarea datelor partenerului in modal
    
    public PartnerList : Observable<any>  ;
    public ItemsListResult =[];
    constructor (private http: Http,private router: Router) {}
      
    
    ngOnInit() {
       
      this.http.get('http://localhost:3001/LoadItems').subscribe((res) => {
        const ItemsList = res.json();
        this.ItemsListResult=ItemsList;
      }
    );
    
    
    }
    
    onRowSelect(event) {
      this.router.navigate(['/nomenclature/items/items-details/'+event.data.ItemId])
      // console.log(event.data.PartnerId);
    }
    
    PartnerEdit(PartnerId) {
      this.router.navigate(['nomenclature/partners/partners-details/'+PartnerId])
    }
    
    PartnerDelete(PartnerId) {
      this.http.post('http://localhost:3001/DeletePartner/' +PartnerId, {
    }).subscribe((res) => {
      const result = res.json();
      window.location.reload(true);
      //console.log(result);
    });
    
    
    }
   
}

// ItemId, ItemName, ItemCode, ItemDescription,ItemType,IsValid,IsStockable,
// ItemMeasuringUnit,ItemPrice,ItemCurrency,VatCode, BarCode, ItemIerarchy
