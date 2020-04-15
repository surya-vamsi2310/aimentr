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

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {

  userInfo;
  UrlData;
  VoewCourse = {
    mentor: "",
    courseId: null,
    courseName: "",
    prerequisites: "",
    cost: null,
    description: "",
    courseType: "",
    duration: "",
    skillLevel: "",
    skills: [],
    tags: "",
    startDate: "",
    endDate: ""
  };

  CourseDetails = {
    mentor: "",
    courseId: null,
    courseName: ""
  }

  AllTopics = [];
  AllSubtopics = [];
  SelectedTopicName = "";

  constructor(
    private http: HttpClient,
    private _formBuilder: FormBuilder,
    private CommonService: CommonService,
    private router: Router,
    private route: ActivatedRoute,
    private EncrDecrService: EncrDecrService,
    private toastr: ToastrService,
  ) {
    this.userInfo = this.CommonService.getuserInfo();
    console.log("userInfo", this.userInfo);

    this.route.queryParams.subscribe(params => {

      if (params.Data) {
        var DecriptedData = this.EncrDecrService.get(params.Data);
        this.UrlData = JSON.parse(DecriptedData);
        this.CourseDetails = {
          mentor: this.UrlData.mentor,
          courseId: this.UrlData.courseId,
          courseName: this.UrlData.courseName,
        };
        console.log("UrlData", this.UrlData);
        this.GetSelectedCourse();
      }
    })


  }

  ngOnInit(): void {

  }


  GetSelectedCourse() {
    var obj = {
      courseId: this.CourseDetails.courseId,
    }
    var url = APIURL.GET_ALL_COURSES_OF_MENTOR;
    this.CommonService.postMethod(url, obj)
      .subscribe((data: Data) => {
        if (data.Status == 200) {
          var SelectedCourse = data.Data[0];

          this.VoewCourse = {
            mentor: SelectedCourse.mentor,
            courseId: SelectedCourse.courseId,
            courseName: SelectedCourse.courseName,
            prerequisites: SelectedCourse.prerequisites,
            cost: SelectedCourse.cost,
            description: SelectedCourse.description,
            courseType: SelectedCourse.courseType,
            duration: SelectedCourse.duration,
            skillLevel: SelectedCourse.skillLevel,
            skills: SelectedCourse.skills,
            tags: SelectedCourse.tags,
            startDate: SelectedCourse.startDate,
            endDate: SelectedCourse.endDate,
          };

          console.log("GetAvailableCourses===>", this.VoewCourse);
          this.GetTopicsList();

        }
      })
  }



  GetTopicsList() {
    var obj = {
      mentor: this.CourseDetails.mentor,
      courseId: this.CourseDetails.courseId
    }
    var url = APIURL.GET_TOPICS_OF_COURSE;
    this.CommonService.postMethod(url, obj)
      .subscribe((data: Data) => {
        console.log("AllTopics===>", data);
        if (data.Success) {
          this.AllTopics = data.Data;
        }

      })
  }

  GetSubTopicsList(item) {
    this.SelectedTopicName = item.topicName;
    var obj = {
      mentor: this.CourseDetails.mentor,
      courseId: this.CourseDetails.courseId,
      topicId: item.topicId
    }
    var url = APIURL.GET_SUB_TOPICS_OF_COURSE;
    this.CommonService.postMethod(url, obj)
      .subscribe((data: Data) => {
        console.log("AllSubtopics===>", data);
        if (data.Success) {
          this.AllSubtopics = data.Data;

          // this.AllTopics.forEach(topic => {
          //   topic.SubTopicsData = [];
          //   this.AllSubtopics.forEach(subtopic => {
          //     if (topic.topicId == subtopic.topicId) {
          //       topic.SubTopicsData.push(subtopic);
          //     }
          //   })
          // })

          // console.log(" this.AllTopics", this.AllTopics)



        }
      })
  }




  // CourseOverView(item) {
  //   console.log(item)
  //   var CourseData = {
  //     mentor: item.mentor,
  //     courseId: item.courseId,
  //     courseName: item.courseName,
  //   }
  //   var StringifyedData = JSON.stringify(CourseData);
  //   var EncriptedData = this.EncrDecrService.set(StringifyedData);
  //   this.router.navigate(['/home/courseview'], { queryParams: { Data: EncriptedData } });

  // }

}
