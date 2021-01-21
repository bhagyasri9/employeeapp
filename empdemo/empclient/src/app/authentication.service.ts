import { Injectable } from '@angular/core';
//import { HttpClientService } from './http-client.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


export class AuthResponse{
  constructor(public status:string) {}
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient:HttpClient) {  }

  authenticate(username, password) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<AuthResponse>('http://localhost:8080/empapp/validateLogin',{headers}).pipe(
      map(
        userData => {
          sessionStorage.setItem('username', username);
          let authString = 'Basic ' + btoa(username + ':' + password);
          sessionStorage.setItem('basicauth', authString);
          return userData;
        }
      )

    );
   }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}






//   constructor() { }

//   authenticate(username, password) {
//     if (username === "raj" && password === "raj123") {
//       sessionStorage.setItem('username', username)
//       return true;
//     } else {
//       return false;
//     }
//   }

//   isUserLoggedIn() {
//     let user = sessionStorage.getItem('username')
//     console.log(!(user === null))
//     return !(user === null)
//   }

//   logOut() {
//     sessionStorage.removeItem('username')
//   }
// }

