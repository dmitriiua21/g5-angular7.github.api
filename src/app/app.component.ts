import { Component } from '@angular/core';

import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private readonly userService: UserService
  ) { }

  ngOnInit() {
    this.userService.load();
  }

}
