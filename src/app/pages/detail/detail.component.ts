import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/core/models/user.model';
import { Observable, Subject } from 'rxjs';

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
