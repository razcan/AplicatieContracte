import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class BreadCrumbService {

  breadcrumb;

  constructor( private activatedRoute: ActivatedRoute,
    private router: Router) {
      
}
ruta() {
  this.router.events.subscribe();
  this.breadcrumb=this.router.url;
}

}
