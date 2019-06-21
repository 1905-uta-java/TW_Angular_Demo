import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  selected : String = "animals";

  constructor() { }

  ngOnInit() {
    this.chooseAnimal();
  }
  animals : String[] = ["Dog", "Cat", "Horse", "Hedgehog", "Lion"];
  days : String[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  colors : String[] = ["Red", "Blue", "Green", "Yellow", "Black"];

  chooseAnimal(){
    document.getElementById("animalList").hidden = false;
    document.getElementById("colorList").hidden = true;
    document.getElementById("dayList").hidden = true;
  }
  chooseDay(){
    document.getElementById("animalList").hidden = true;
    document.getElementById("colorList").hidden = true;
    document.getElementById("dayList").hidden = false;
  }
  chooseColor(){
    document.getElementById("animalList").hidden = true;
    document.getElementById("colorList").hidden = false;
    document.getElementById("dayList").hidden = true;
  }
}
