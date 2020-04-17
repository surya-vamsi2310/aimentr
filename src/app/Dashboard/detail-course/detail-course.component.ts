import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, NgModel } from '@angular/forms';
import { CommonService } from '../../Services/common.service';
import { Router, NavigationExtras, ActivatedRoute, Data } from '@angular/router';
import { EncrDecrService } from '../../Services/encr-decr.service'
import { APIURL } from '../../url';
import { ToastrService } from 'ngx-toastr';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {
  HttpClient,
  HttpRequest,
  HttpEventType,
  HttpResponse, HttpHeaders
} from '@angular/common/http';
import * as moment from 'moment';


@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.scss']
})
export class DetailCourseComponent implements OnInit {

  Student = false;

  roles;
  userInfo;

  MentorsList = [];




  constructor(
    private http: HttpClient,
    private _formBuilder: FormBuilder,
    private CommonService: CommonService,
    private router: Router,
    private route: ActivatedRoute,
    private EncrDecrService: EncrDecrService,
    private toastr: ToastrService,
  ) {
    this.roles = this.CommonService.getRoles();
    this.userInfo = this.CommonService.getuserInfo();
    console.log("userInfo", this.roles, this.userInfo);

    if (this.roles.student == this.userInfo.role) {
      this.Student = true;
    }


    this.GetUsersAndCourses();
  }

  ngOnInit(): void {
  }


  GetUsersAndCourses() {
    var obj = {
      role: this.roles.mentor
    }
    var url = APIURL.GET_USERS_FOR_FILTERS;
    this.CommonService.postMethod(url, obj)
      .subscribe((data: Data) => {
        if (data.Status == 200) {
          this.MentorsList = data.Data;
          console.log("GetAvailableCourses===>", this.MentorsList);
        }
      })
  }


  viewDashboard(item) {
    console.log(item);

    var TransforData = {
      mentor: item.email
    }
    var StringifyedData = JSON.stringify(TransforData);
    var EncriptedData = this.EncrDecrService.set(StringifyedData);
    this.router.navigate(['/home/student/mentordashboard'], { queryParams: { Data: EncriptedData } });
  }


}
