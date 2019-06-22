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

  private selectedUserSubject: BehaviorSubject<User> = new BehaviorSubject<User>({} as User);
  // public _selectedUser: Observable<User> = this.selectedUserSubject.asObservable();

  constructor(
    private readonly apiService: ApiService
  ) { }

  get users$(): Observable<User[]> {
    return this.userSubject.pipe(map(data => data));
  }

  get user$(): Observable<User> {
    return this.selectedUserSubject.pipe(map(data => data ));
  }

  selectUser(user: User) {
    this.selectedUserSubject.next(user);
  }

  load(): void {
    this.apiService.get('users').pipe(takeUntil(this.destroy$))
      .subscribe(data => this.populateUsers(data));
  }

  search(query: string): void {
    this.apiService.get(`search/users?q=${query}&per_page=20`).pipe(takeUntil(this.destroy$))
      .subscribe(data => this.populateUsers(data.items))
}

  populateUsers(users): void {
    this.userSubject.next(users);
  }

}
