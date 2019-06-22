import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from './../../core/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  model: any;

  constructor(
    private readonly userService: UserService
  ) { }

  ngOnInit() {
  }

  onSearch(form: NgForm): void {
    if (form.value.search) {
      this.userService.search(form.value.search);
    } else {
      this.userService.load();
    }
  }

}
