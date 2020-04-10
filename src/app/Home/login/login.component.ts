import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 url: string = 'http://localhost:3000/';
 loginForm: FormGroup;
  constructor(private http: HttpClient,private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
      // remember: ['']
    });
  }
  
  login() {
  //   this.isSubmitted = true;
  //   if (this.loginForm.invalid) {
  //     return;
  //   }
  //   for (const val of this.getKeys(this.loginForm.value)) {
  //     console.log("val:: ",val);
  //     this.loginForm.value[val] = this.loginForm.value[val].trim();
  //   }
  //   this.submissionInProgress = true;
  //   this.authSrv.login(this.loginForm.value).subscribe( data => {
  //     this.resetFormFields();
  //     if (data && data.user) {

  //       if(!!data.user.verified) {
  //         if (data.user.profileUpdated) {
  //           this.router.navigateByUrl(ProjConstant.HOME_ROUTE);
  //         } else {
  //           const role = this.dataSrv.getExpanedRole(this.authSrv.getUserDetails('role')).toLowerCase();
  //           this.router.navigateByUrl(`auth/profile/${role}`);
  //         }
  //       }else {
  //         this.router.navigateByUrl(ProjConstant.MAIL_VERIFICATION);
  //       }

  //     } else {
  //       this.dataSrv.showToastMessage( data.error.msg, 'error');
  //       this.submissionInProgress = false;
  //     }
  //     this.submissionInProgress = false;
  //   }, error => {
  //     this.dataSrv.showToastMessage( error.error.message, 'error');
  //     this.submissionInProgress = false;
  //   }, () => {
  //     this.submissionInProgress = false;
  //   });
  // }

  // checkForValidUser() {
  //   let postData: any = {};
  //   postData.username = this.loginForm.get('username').value;
  //   this.httpSrv.makeGetApiCall('VALIDATE_USER', postData).subscribe( data => {
  //       this.isValidUser = true;
  //   }, error => {
  //     this.isValidUser = false;
  //   }, () => {
  //   });
  // }

  // routeToRegister() {
  //   this.router.navigateByUrl('auth/register');
  // }

  // resetFormFields() {
  //   this.loginForm.reset();
  // }
}
} 