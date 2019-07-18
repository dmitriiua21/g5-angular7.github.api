import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(
    private readonly userService: UserService,
    private readonly router : Router
  ) { }

  ngOnInit() {
    this.users$ = this.userService.users$;
  }

  showDetail(user: User) {
    this.userService.selectUser(user);
    this.router.navigateByUrl('/detail');
  }

}
