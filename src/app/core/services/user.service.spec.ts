import { TestBed, tick, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {  of } from 'rxjs';

import { UserService } from './user.service';
import { User } from '../models';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ UserService ]
    });
    service = TestBed.get(UserService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

  describe('load()', () => {

    it('should return empty array []', (done: DoneFn) => {
      service.users$.subscribe( res => {
        expect(res).toEqual([]);
        done();
      });
    });

    it('should return ', (done: DoneFn) => {

      const response: User[] = [];
      // spyOn(service, 'load').and.returnValue(of(["aaaaaa", "bbbbb"]));
    });
  });

});
