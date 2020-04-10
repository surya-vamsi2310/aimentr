import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpEventType,
  HttpResponse, HttpHeaders
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { Subject } from 'rxjs'



@Injectable({
  providedIn: 'root'
})
export class CommonService {

  authToken: any;
  httpClient: any;

  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router) { }



  getHeaders(api?: string) {
    const options = { headers: {} };
    options.headers['Content-Type'] = 'application/json';
    options.headers['Access-Control-Allow-Origin'] = '*';

    // if(this.authSrv.isLoggedIn()) {
    //   console.log("coming here:: ",this.authSrv.getUserDetails('jwtToken'));
    //   options.headers['Authorization'] = this.authSrv.getUserDetails('jwtToken');
    // }
    return options;
  }


  // makePostApiCall(api: string, postData: any): Observable<any> {
  //   return this.http.post(this.baseUrl + '' + apiStatus.api, postData, this.getHeaders(api));
  // }

  // , this.getHeaders(url)
  postMethod(url, data): Observable<Object> {
    return this.http.post(url, data , this.getHeaders(url)).pipe(
      map((response: Data) => {
        return response
      })
    );
  }







  // createAuthorizationHeader(): HttpHeaders {
  //   this.loadToken();
  //   const headers = new HttpHeaders().set('content-type', 'application/json').set('authorization', this.authToken);
  //   return headers;
  // }

  // loadToken() {
  //   const token = localStorage.getItem('token');
  //   this.authToken = token;
  // }




  // Post(url, data): Observable<Object> {
  //   // this.SpinnerService.show();
  //   return this.http.post(url, data).pipe(
  //     map((response: Data) => {

  //       // if (response.auth == false) {
  //       //   alert(response.message);
  //       //   localStorage.setItem("UserLogin", 'fasle');
  //       //   localStorage.setItem('LoginUser', '');
  //       //   localStorage.setItem('token', '');
  //       //   this.router.navigate(['/Login'])
  //       // }
  //       // this.SpinnerService.hide();
  //       return response;
  //     })
  //   );
  // }



  // postMethod(url, data): Observable<Object> {
  //   // this.SpinnerService.show();
  //   return this.http.post(url, data, { headers: this.createAuthorizationHeader() }).pipe(
  //     map((response: Data) => {
  //       // if (response.auth == false) {
  //       //   alert(response.message);
  //       //   localStorage.setItem("UserLogin", 'fasle');
  //       //   localStorage.setItem('LoginUser', '');
  //       //   localStorage.setItem('token', '');
  //       //   this.router.navigate(['/Login'])
  //       // }

  //       // this.SpinnerService.hide();
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
