import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET } from "@angular/router";
import "rxjs/add/operator/filter";
import { NgModule }      from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { HttpParams, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-partners-details',
  templateUrl: './partners-details.component.html',
  styleUrls: ['./partners-details.component.css']
})
export class PartnersDetailsComponent implements OnInit {
  PartnerId: number;
  PartnerStatus : string;
  PartnerName : string;
  PartnerCode : string;
  PartnerInternalCode: string;
  PartnerType : string;
  ShortPartnerName: string;
  ComercialRegistration: string;
  FiscalRegistration : string;
  PartnerAddress : string;
  LegalForm: string;
  Notes: string;
  VATPayer: string;
  BankAccount : string;
  Delegate : string;
  Agent : string;
  BaseCurrency : string;
  Phone : string;
  Email : string;
  WEB : string;
  Id;
  results = [];
  

  constructor(private http: Http, private route: ActivatedRoute,private router:Router) { }

  PartnerSave() {
    this.http.post('http://localhost:3001/SavePartner', {
    PartnerId: this.PartnerId,  
    PartnerStatus: this.PartnerStatus , 
    PartnerName: this.PartnerName, PartnerCode: this.PartnerCode, PartnerInternalCode: this.PartnerInternalCode,
    PartnerType: this.PartnerType, ShortPartnerName: this.ShortPartnerName,
    ComercialRegistration: this.ComercialRegistration, FiscalRegistration: this.FiscalRegistration, 
    PartnerAddress: this.PartnerAddress,
    LegalForm: this.LegalForm, Notes: this.Notes, VATPayer: this.VATPayer,
    BankAccount: this.BankAccount, Delegate: this.Delegate, Agent: this.Agent,
    BaseCurrency: this.BaseCurrency, Phone: this.Phone, Email: this.Email, WEB: this.WEB,
  }).subscribe((res) => {
    const result = res.json();
    //console.log(result);
  });
  }


display: boolean = false;
// pentru incarcarea datelor partenerului in modal
DoNotshowDialog() {
  this.display = false;
}

PartenerIdForDelete ;
PartnerNameForDelete : string ='' ;

onClick(event, partners){
  this.display = true;
  this.PartenerIdForDelete = this.PartnerId;
  this.PartnerNameForDelete = this.PartnerName;
 
}
// pentru incarcarea datelor partenerului in modal

// sterge partener
PartnerDelete(PartenerIdForDelete) {
  this.http.post('http://localhost:3001/DeletePartner/' + PartenerIdForDelete, {
}).subscribe((res) => {
  const result = res.json();
  //window.location.reload(true);
  this.router.navigate(['/nomenclature/partners']); 
});
}
// sterge partener

  ngOnInit() {

    const IdRuta = this.route.snapshot.params['PartnerId'];
    this.PartnerId = IdRuta;
    this.http.get('http://localhost:3001/LoadPartner/' + this.PartnerId).subscribe((res) => {
      const results = res.json();
      this.results = results;

      var exista=0;
      if (typeof(IdRuta) !== "undefined" && IdRuta){
          this.PartnerId=results[0].PartnerId;
          this.PartnerStatus=results[0].PartnerStatus;
          this.PartnerName=results[0].PartnerName;
          this.PartnerCode=results[0].PartnerCode;
          this.PartnerInternalCode=results[0].PartnerInternalCode;
          this.PartnerType=results[0].PartnerType;
          this.ShortPartnerName=results[0].ShortPartnerName;
          this.ComercialRegistration=results[0].ComercialRegistration;
          this.FiscalRegistration=results[0].FiscalRegistration;
          this.PartnerAddress=results[0].PartnerAddress;
          this.LegalForm=results[0].LegalForm;
          this.Notes=results[0].Notes;
          this.VATPayer=results[0].VATPayer;
          this.BankAccount=results[0].BankAccount;
          this.Delegate=results[0].Delegate;
          this.Agent=results[0].Agent;
          this.BaseCurrency=results[0].BaseCurrency;
          this.BankAccount=results[0].BankAccount;
          this.Phone=results[0].Phone;
          this.Email=results[0].Email;
          this.WEB=results[0].WEB;
        }
      else 
          {this.PartnerStatus='';
          this.PartnerName='';
          this.PartnerCode='';
          this.PartnerInternalCode='';
          this.PartnerType='';
          this.ShortPartnerName='';
          this.ComercialRegistration='';
          this.FiscalRegistration='';
          this.PartnerAddress='';
          this.LegalForm='';
          this.Notes='';
          this.VATPayer='';
          this.BankAccount='';
          this.Delegate='';
          this.Agent='';
          this.BaseCurrency='';
          this.BankAccount='';
          this.Phone='';
          this.Email='';
          this.WEB='';}
    }
  );
  }

}
