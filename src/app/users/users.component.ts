import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private user_service:UserServiceService) { }

  ngOnInit() {
  }

  user_info = null;

  getUsers(){
    this.user_service.getUsers().subscribe(udat => {
      this.user_info = udat;
    })
  }
}
