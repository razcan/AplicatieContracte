import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  cols: any[];
  departments: any[];
  display: boolean = false;

  newCodeDepartament;
  newDenumireDepartament;
  newResponsabilDepartament;

  constructor() { }

  ngOnInit() {

    this.cols = [
      { field: 'codDepartament', header: 'Cod Departament' },
      { field: 'denumireDepartament', header: 'Denumire Departament' },
      { field: 'responsabilDepartament', header: 'Responsabil Departament' },
      
  ];

  this.departments = [
    { codDepartament: '001', denumireDepartament: 'abc', responsabilDepartament: 'a'},
    { codDepartament: '002', denumireDepartament: 'def', responsabilDepartament: 'd'},
    { codDepartament: '002', denumireDepartament: 'xyz', responsabilDepartament: 'q'},
];

}

  showDialog() {
    this.display = true;
}

  saveDepartment(newCodeDepartament, newDenumireDepartament, newResponsabilDepartament) {
    console.log(newCodeDepartament, newDenumireDepartament, newResponsabilDepartament);
    this.newCodeDepartament = '';
    this.newDenumireDepartament = '';
    this.newResponsabilDepartament = '';
    this.display = false;
  }

}
