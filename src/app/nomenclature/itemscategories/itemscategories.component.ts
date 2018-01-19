import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itemscategories',
  templateUrl: './itemscategories.component.html',
  styleUrls: ['./itemscategories.component.css']
})
export class ItemscategoriesComponent implements OnInit {

  constructor() { 
  }

  calcul: Obiecte = new Obiecte(15);
  rezultat = this.calcul.Afiseaza(20);

  ngOnInit() { 

console.log(this.calcul);
console.log(this.rezultat);
  }
}

export class Obiecte implements OnInit {

private Nr1;
public rezultat;

  constructor(Nr1 : number) { 
    this.Nr1=Nr1;
  }
public Afiseaza(Nr1):number {
  return Nr1+30;
}      
      ngOnInit() {
        }
    
      }    

