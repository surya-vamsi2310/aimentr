import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../Services/common.service';
import { Router, NavigationExtras, ActivatedRoute, Data } from '@angular/router';
import { EncrDecrService } from '../../Services/encr-decr.service'
import { APIURL } from '../../url';
import { ToastrService } from 'ngx-toastr';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import * as moment from 'moment';
@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {
  userInfo;
  UrlData;
  OfflinecoursesView = true;

  PaidCourses = [];
  AvailableCourses = [];
  OfflineCoursesList = [];
  OnlineCoursesList = [];

  constructor(
    private CommonService: CommonService,
    private router: Router,
    private route: ActivatedRoute,
    private EncrDecrService: EncrDecrService,
    private toastr: ToastrService,
  ) {
    this.userInfo = this.CommonService.getuserInfo();

    this.GetpaidCourses();
    console.log("userInfo", this.userInfo);

  }

  ngOnInit(): void { }




  GetpaidCourses() {
    var obj = {
      email: this.userInfo.email,
    }
    var url = APIURL.GET_PAID_COURSES;
    this.CommonService.postMethod(url, obj)
      .subscribe((data: Data) => {
        if (data.Status == 200) {
          this.PaidCourses = data.Data;
          console.log("this.getpaid courses", this.PaidCourses)
          this.GetAvailableCourses();

        }
      })
  }



  GetAvailableCourses() {
    var courseIds = [];
    this.PaidCourses.forEach(x => {
      courseIds.push(x.courseId)
    })

    var obj = {
      courseIds: courseIds
    }
    console.log("obj", obj)
    var url = APIURL.GET_ALL_COURSES_OF_MENTOR;
    this.CommonService.postMethod(url, obj)
      .subscribe((data: Data) => {

        if (data.Status == 200) {
          this.AvailableCourses = data.Data;

          // startDate: "2020-04-19T18:30:00.000Z"
          // endDate
          this.AvailableCourses.forEach(course => {
            course.CompletedDuration = 0;
            var startdate = new Date(course.startDate)
            course.endDate = startdate.setDate(startdate.getDate() + parseInt(course.duration));
            const dateIsAfter = moment(Date.now()).isAfter(moment(course.startDate));
            if (dateIsAfter) {
              // console.log("------duration Start-------");
              const dateIsBefore = moment(Date.now()).isBefore(moment(course.endDate));
              if (dateIsBefore) {
                // console.log("-------duration in process------");
                const CorrentDate = moment(Date.now());
                const courseStartDate = moment(course.startDate);
                const CompletedDays = CorrentDate.diff(courseStartDate, 'days');
                const TotalDuration = parseInt(course.duration);
                // console.log("CompletedDays",CompletedDays , "Duration" , parseInt(course.duration) );
                const CompletedPercentage = (CompletedDays * 100) / TotalDuration;
                course.CompletedDuration = CompletedPercentage;
                // console.log("CompletedPercen  tage",CompletedPercentage );
              } else {
                // console.log("duration end")
                course.CompletedDuration = 100;
              }
            } else {
              // console.log("duration is not begin")
              course.CompletedDuration = 0;
            }


          })
          console.log("GetAvailableCourses===>", this.AvailableCourses);

          this.OfflineCoursesList = this.AvailableCourses.filter(x => x.courseType == 'Offline');
          this.OnlineCoursesList = this.AvailableCourses.filter(x => x.courseType == 'Online')



        }
      })
  }


  OffLineCourses() {
    this.OfflinecoursesView = true;
  }

  OnlineCourses() {
    this.OfflinecoursesView = false;
  }




  gotocalssroom(item) {
    console.log(item)
    var CourseData = {
      mentor: item.mentor,
      courseId: item.courseId,
      courseName: item.courseName,
    }
    var StringifyedData = JSON.stringify(CourseData);
    var EncriptedData = this.EncrDecrService.set(StringifyedData);
    this.router.navigate(['/home/student/video'], { queryParams: { Data: EncriptedData } });

  }




}

