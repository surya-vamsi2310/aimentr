import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../../Services/common.service';
import { Router, NavigationExtras, ActivatedRoute, Data } from '@angular/router';
import { forkJoin } from 'rxjs';

// import { MatDialogRef } from '@angular/material'
enum roles{
  admin= 1,
  student= 2,
  mentor= 3
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

UserRegistration = {
  role: null,
  email:"",
  username:"",
  password :"",
  resume:null,
}


filesToUpload: Array<File> = [];

  constructor(private CommonService: CommonService,
    private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
  }

  changeRole(){
    console.log(this.UserRegistration)
  }

 
  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    
  }
  uploadBulkOfData() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    formData.append("uploads[]", files[0], files[0]['name']);

    var url = "http://localhost:8080/api/upload";
    this.CommonService.postMethod(url, formData)
      .subscribe((data: Data) => {
        if (data.Status == 200) {
          console.log("Data===>",data);
        }
        else {
          console.log("err===>",data);
        }
      })
  }

 

  Continue(){
    if(this.UserRegistration.role == roles.mentor){
      this.uploadBulkOfData()
    }else{
      console.log(this.UserRegistration)
    }
  }











}
