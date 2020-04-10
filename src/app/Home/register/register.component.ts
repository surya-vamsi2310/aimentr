import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../../Services/common.service';
import { Router, NavigationExtras, ActivatedRoute, Data } from '@angular/router';
import { EncrDecrService } from '../../Services/encr-decr.service'
import {
  HttpClient,
  HttpRequest,
  HttpEventType,
  HttpResponse, HttpHeaders
} from '@angular/common/http';
import { APIURL } from '../../url'
import { map } from 'rxjs/operators';

// import { MatDialogRef } from '@angular/material'
enum roles {
  admin = 1,
  student = 2,
  mentor = 3
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  UserRegistration = {
    role: null,
    email: "",
    username: "",
    password: "",
    resume: null,
  }


  filesToUpload: Array<File> = [];



  ExtractedData = {
    username:"",
    Email: "",
    MobileNumber: null,
    Context: null,
    Company: null,
    Experience: [],
    role:""
  }


  constructor(
    private http: HttpClient,
    private CommonService: CommonService,
    private router: Router,
    private route: ActivatedRoute,
    private EncrDecrService: EncrDecrService) { }

  ngOnInit(): void {
  }

  changeRole() {
    console.log(this.UserRegistration)
  }


  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;

  }

  getHeaders() {
    const options = { headers: {} };
    options.headers['Content-Type'] = 'application/json';
    options.headers['Access-Control-Allow-Origin'] = '*';

    // if(this.authSrv.isLoggedIn()) {
    //   console.log("coming here:: ",this.authSrv.getUserDetails('jwtToken'));
    //   options.headers['Authorization'] = this.authSrv.getUserDetails('jwtToken');
    // }
    return options;
  }

  uploadBulkOfData() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    formData.append("resume", files[0]);
    var url = APIURL.EXTRACT_RESUME;
    this.http.post(url, formData, { headers: {} }).subscribe(
      (response: Data)=> {
        console.log(response)

        var ExtractData = response.Data;

        this.ExtractedData = {
          username:ExtractData.username,
          Email: ExtractData.Email,
          MobileNumber: ExtractData.MobileNumber,
          Context: ExtractData.Context,
          Company: ExtractData.Company,
          Experience: ExtractData.Experience,
          role: this.UserRegistration.role
        };
        console.log("this.ExtractedData", this.ExtractedData);
        // profile
        var StringifyedData = JSON.stringify(this.ExtractedData);
        var EncriptedData = this.EncrDecrService.set(StringifyedData);
        this.router.navigate(['/verifyotp'], { queryParams: { Data: EncriptedData } })

      }, err => {
        console.log(err)
      }

    )
  }

  // uploadBulkOfData() {
  //   // const formData: any = new FormData();
  //   // const files: Array<File> = this.filesToUpload;
  //   // formData.append("uploads[]", files[0], files[0]['name']);

  //   // var url = APIURL.REGISTER_WITH_RESUME;
  //   // this.CommonService.postMethod(url, formData)
  //   //   .subscribe((data: Data) => {
  //   //     if (data.Status == 200) {
  //   //       console.log("Data===>", data);
  //   //       var ExtractData = data.Data;

  //   //       this.ExtractedData = {
  //   //         Email: ExtractData.Email[0],
  //   //         MobileNumber: ExtractData.phone[0],
  //   //         Context: ExtractData.Context[0],
  //   //         Company: ExtractData.Company[0],
  //   //         Experience: ExtractData.Exp_date,
  //   //       };
  //   //       console.log("this.ExtractedData", this.ExtractedData);
  //   //       // profile
  //   //       var StringifyedData = JSON.stringify(this.ExtractedData);
  //   //       var EncriptedData = this.EncrDecrService.set(StringifyedData);
  //   //       this.router.navigate(['/mentorshipregistration'], { queryParams: { Data: EncriptedData } })

  //   //     }
  //   //     else {
  //   //       console.log("err===>", data);
  //   //     }
  //   //   })


  // }



  Continue() {
    if (this.UserRegistration.role == roles.mentor) {
      this.uploadBulkOfData()
    } else {
      this.StudentRegistration()
    }
  }



  StudentRegistration() {
    console.log(this.UserRegistration);
  }







}
