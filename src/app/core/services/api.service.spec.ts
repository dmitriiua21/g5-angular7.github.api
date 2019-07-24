import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ApiService } from './api.service';
import { environment } from 'src/environments/environment';
import { User } from '../models';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ ApiService ]
    });
    service = TestBed.get(ApiService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });

  it("should return users []", () => {
    const dummyUsers: User[] = [
      {
        login: "Test 1",
        id: "1",
        avatar_url: "https://example.com/avatar/1",
        url: "https://example.com/1",
        html_url: "https://example.com",
        email: "example.mail",
        type: "User"
      }
    ];

    service.get('users').subscribe(users => {
        expect(users.length).toBe(1);
        expect(users).toEqual(dummyUsers);
      }
    );

    const req = httpMock.expectOne(`${environment.api_url}users`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyUsers);
  });

});
