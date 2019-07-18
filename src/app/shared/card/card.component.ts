import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { UserService, User } from 'src/app/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() user: User;

  constructor(
    private readonly userService: UserService,
    private readonly router: Router
  ) { }

  ngOnInit() { }

  showDetail() {
    this.userService.selectUser(this.user);
    this.router.navigateByUrl('/detail');
  }

}
