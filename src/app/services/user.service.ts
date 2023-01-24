import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsers() : Observable<Array<User>>{

    return this.http.get<Array<User>>("http://localhost:8080/v1/users/", {headers: new HttpHeaders({'Access-Control-Allow-Origin': '*'})});

  }
}
