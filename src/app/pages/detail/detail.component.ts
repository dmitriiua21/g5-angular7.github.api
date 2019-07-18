import { Component, OnInit } from '@angular/core';

import { UserService, User } from 'src/app/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  subscription: any;
  user$: Observable<User>;

  constructor(
    private readonly userService: UserService
  ) { }

  ngOnInit() {
    this.user$ = this.userService.user$;
  }

  ngOnDestroy() {
    this.userService.selectUser({} as User)
  }

}
