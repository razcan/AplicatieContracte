import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  cols: any[];
  persons: any[];
  display: boolean = false;

  newName;
  newSurname;
  newCNP;
  newFunction;
  newEmail;
  newTelephone;

  constructor() { }

  ngOnInit() {

    this.cols = [
      { field: 'pName', header: 'Prenume' },
      { field: 'pSurname', header: 'Nume' },
      { field: 'pCNP', header: 'CNP' },
      { field: 'pFunction', header: 'Functie' },
      { field: 'pEmail', header: 'Email' },
      { field: 'pTelephone', header: 'Telefon' },
      
  ];

  this.persons = [
    { pName: 'Rebe',pSurname: 'Mustata', pCNP: '25587', pFunction: 'Director', pEmail: 'rebe@', pTelephone: '123456'},
    { pName: 'Ana', pSurname: 'Mustata', pCNP: '2547', pFunction: 'Director', pEmail: 'ana@', pTelephone: '14587'},
    { pName: '001', pSurname: 'abc', pCNP: 'a', pFunction: 'fgsfg', pEmail: 'sgsf', pTelephone: 'sfg'},
];

}

  showDialog() {
    this.display = true;
}

  savePerson(newName, newSurname, newCNP, newFunction, newEmail, newTelephone) {
    console.log(newName, newSurname, newCNP, newFunction, newEmail, newTelephone);
    this.newName = '';
    this.newSurname = '';
    this.newCNP = '';
    this.newFunction = '';
    this.newEmail = '';
    this.newTelephone = '';
    this.display = false;
  }

  }


