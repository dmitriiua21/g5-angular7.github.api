import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UserService } from './../core/services/user.service';
import { User } from '../core/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(
    private readonly userService: UserService
  ) { }

  ngOnInit() {
    this.users$ = this.userService.users$;
  }

}
