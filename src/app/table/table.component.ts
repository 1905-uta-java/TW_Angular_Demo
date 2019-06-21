import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  people : Person[] = [
    new Person("Ab", "Cd", "Ab@C.d", "01/01/0001"),
    new Person("ef", "gh", "ef@g.h", "01/01/0001"),
    new Person("Ij", "kl", "Ij@k.l", "01/01/0001"),
    new Person("mn", "Op", "mn@O.p", "01/01/0001")
  ]
}

export class Person {
  first_name : String
  last_name : String
  email : String
  birthday : String
  constructor(_first_name : String, _last_name : String, _email : String, _birthday : String){
    this.first_name = _first_name;
    this.last_name = _last_name;
    this.email = _email;
    this.birthday = _birthday;
  }
}