import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({providedIn: 'root'})
export class AuthService {
  [x: string]: any;

  public user?: User;


  private baseUrl = 'http://localhost:8081/api/users/login';
  private baseUrlR = 'http://localhost:8081/api/users';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(
    private http: HttpClient
  ) { }

  private LoggedIn = false;



  Login(user:User):Observable<User>{
    return this.http.post<User>(this.baseUrl, user,{headers:this.httpHeaders})
  }

  Logout():Observable<any>{
    return this.http.post<any>(this.baseUrl, {headers:this.httpHeaders})
  }

  isLoggedIn() {
    return this.LoggedIn;
  }

  registerUser(user:User):Observable<User>{
    return this.http.post<User>(this.baseUrlR, user,{headers:this.httpHeaders})
  }




}


