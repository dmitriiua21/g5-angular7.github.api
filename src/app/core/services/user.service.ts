import { Injectable } from '@angular/core';

import { ApiService } from './api.service';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private destroy$: Subject<any> = new Subject();
  private userSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  constructor(
    private readonly apiService: ApiService
  ) { }

  get users$(): Observable<User[]> {
    return this.userSubject.pipe(map(data => data));
  }

  load(): void {
    this.apiService.get('users').pipe(takeUntil(this.destroy$))
      .subscribe(data => this.populateUsers(data));
  }

  populateUsers(users): void {
    this.userSubject.next(users);
  }

}
