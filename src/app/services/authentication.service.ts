import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, retry } from 'rxjs/operators';
import {GlobalErrorHandlerService} from './global.error.handler.service'

export class User {
  constructor(
    public status: string,
  ) { }

}


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl: string;

  constructor(private httpClient: HttpClient, private errorHandler: GlobalErrorHandlerService) {
    this.baseUrl = "http://localhost:8080/cipher/data/";
  }


  authenticate(username, password) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<User>(this.baseUrl + 'validatelogin', { headers }).pipe(
      map(
        userData => {
          sessionStorage.setItem('username', username);
          let authString = 'Basic ' + btoa(username + ':' + password);
          sessionStorage.setItem('basicauth', authString);
          console.log(JSON.stringify(userData));
          return userData;
        })
    );
  }

  

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    return !(user === null)
  } 

  logOut() {
    sessionStorage.removeItem('username')
  }
}
