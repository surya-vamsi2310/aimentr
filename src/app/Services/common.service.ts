import { Injectable } from '@angular/core';
import {   
  HttpClient,
  HttpRequest,
  HttpEventType,
  HttpResponse, } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs'
import { catchError, map, tap } from 'rxjs/operators';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { Subject } from 'rxjs'



@Injectable({
  providedIn: 'root'
})
export class CommonService {
  httpClient: any;

  // authToken: any;
  // httpClient: any;

  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router) { }


 postMethod(url, data): Observable<Object> {
    return this.http.post(url, data).pipe(
      map(response => {
        return response
      })
    );
  }

  getMethod(url): Observable<Object> {
    return this.http.get(url).pipe(
      map(response => {
        return response
      })
    )
  }

  














//  createAuthorizationHeader(): HttpHeaders {
//     this.loadToken();
//     const headers = new HttpHeaders().set('content-type', 'application/json').set('authorization', this.authToken);
//     return headers;
//   }

//   loadToken() {
//     const token = localStorage.getItem('token');
//     this.authToken = token;
//   }




  // Post(url, data): Observable<Object> {
  //   // this.SpinnerService.show();
  //   return this.http.post(url, data).pipe(
  //     map((response: Data) => {

  //       if (response.auth == false) {
  //         alert(response.message);
  //         localStorage.setItem("UserLogin", 'fasle');
  //         localStorage.setItem('LoginUser', '');
  //         localStorage.setItem('token', '');
  //         this.router.navigate(['/Login'])
  //       }
  //       // this.SpinnerService.hide();
  //       return response;
  //     })
  //   );
  // }

  

  // postMethod(url, data): Observable<Object> {
  //   this.SpinnerService.show();
  //   return this.http.post(url, data, { headers: this.createAuthorizationHeader() }).pipe(
  //     map((response: Data) => {
  //       if (response.auth == false) {
  //         alert(response.message);
  //         localStorage.setItem("UserLogin", 'fasle');
  //         localStorage.setItem('LoginUser', '');
  //         localStorage.setItem('token', '');
  //         this.router.navigate(['/Login'])
  //       }

  //       this.SpinnerService.hide();
  //       return response
  //     })
  //   );
  // }


  // getMethod(url): Observable<Object> {
  //   return this.http.get(url).pipe(
  //     map(response => {
  //       return response
  //     })
  //   )
  // }


  // StoreUserData(token) {
  //   localStorage.setItem('token', token);
  //   this.authToken = token;
  // }











 


}
