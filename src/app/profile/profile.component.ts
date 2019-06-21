import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user : UserProfile = {
    login: "Abc",
    id: 123,
    netWorth: 987654
  }

  constructor() { }

  ngOnInit() {
  }

  HideShow(){
    if(document.getElementById("HideShow").innerHTML === "Hide"){
      document.getElementById("HideShow").innerHTML = "Show";
      document.getElementById("User").hidden = true;
    }
    else{
      document.getElementById("HideShow").innerHTML = "Hide";
      document.getElementById("User").hidden = false;
    }
  }

}

export class UserProfile {
  login : String;
  id : number;
  netWorth : number;

  constructor(_login, _id, _netWorth){
    this.login = _login;
    this.id = _id;
    this.netWorth = _netWorth;
  }
}
