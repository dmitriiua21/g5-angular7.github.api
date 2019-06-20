import { Component, OnInit } from '@angular/core';

import { UserService } from './../core/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users$: any;

  constructor(
    private readonly userService: UserService
  ) { }

  ngOnInit() {
    this.users$ = this.userService.users$;
  }

}
