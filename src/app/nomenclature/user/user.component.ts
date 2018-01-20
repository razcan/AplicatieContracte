import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  cols: any[];
  users: any[];
  display: boolean = false;

  newName;
  newSurname;
  newUserName;
  newPassword;
  newEmail;
  newUserGroup;
  newStatus;

  constructor() { }

  ngOnInit() {

    this.cols = [
      { field: 'pName', header: 'Prenume' },
      { field: 'pSurname', header: 'Nume' },
      { field: 'pUserName', header: 'UserName' },
      { field: 'pPassword', header: 'Parola' },
      { field: 'pEmail', header: 'Email' },
      { field: 'pUserGroup', header: 'Grup Utilizatori' },
      { field: 'pStatus', header: 'Status' },
      
  ];

  this.users = [
    { pName: 'Rebe',pSurname: 'Mustata', pUserName: '25587', pPassword: 'Director', pEmail: 'rebe@', pUserGroup: '123456', pStatus: 'Activ'},
    { pName: 'Ana', pSurname: 'Mustata', pUserName: '2547', pPassword: 'Director', pEmail: 'ana@', pUserGroup: '14587', pStatus: 'Inactiv'},
    { pName: '001', pSurname: 'abc', pUserName: 'a', pPassword: 'fgsfg', pEmail: 'sgsf', pUserGroup: 'sfg', pStatus: ''},
];

}

  showDialog() {
    this.display = true;
}

  savePerson(newName, newSurname, newUserName, newPassword, newEmail, newUserGroup, newStatus) {
    console.log(newName, newSurname, newUserName, newPassword, newEmail, newUserGroup, newStatus);
    this.newName = '';
    this.newSurname = '';
    this.newUserName = '';
    this.newPassword = '';
    this.newEmail = '';
    this.newUserGroup = '';
    this.newStatus = '';
    this.display = false;
  }
  

}
