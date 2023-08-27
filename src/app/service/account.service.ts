import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Account {
  firstname?: string | null;
  lastname?: string | null;
}


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpClient
  ) { }

  getAccountName(): Observable<any> {
    return this.http.post('http://localhost:8080/hello', {});
  }

  saveAccount(account: Account): Observable<any> {
    return this.http.post('http://localhost:8080/hello/save-account', account);
  }
}
