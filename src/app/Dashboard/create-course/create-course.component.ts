import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, NgModel } from '@angular/forms';
import { CommonService } from '../../Services/common.service';
import { Router, NavigationExtras, ActivatedRoute, Data } from '@angular/router';
import { EncrDecrService } from '../../Services/encr-decr.service'
import { APIURL } from '../../url';
import { ToastrService } from 'ngx-toastr';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit {

  viewstep = "4";
  SessionType = "Online";




  userInfo;

  Payload = {
    mentor: "",
    courseName: "",
    subtitle: "",
    prerequisites: "",
    cost: null,
    description: "",
    courseType: "",
    duration: "",
    skillLevel: "",


    topics: [],
    // topicIdList: [number],



    timings: {  // only online sessions
      start: {
        hour: null,
        minute: null,
        second: null
      },
      end: {
        hour: null,
        minute: null,
        second: null
      }
    },

    startDate: null,
    endDate: null,
    tags: [""],
    skills: [""],

  }




  AddTopicObj = {
    uniqueId: null,
    title: '',
    subTopics: []
  }

  AddSubtopic = {
    uniqueId: null,
    title: "",
    url: "",
    provider: "",
    programming: false
  }


  UrlData;
  CourseDetails = {
    mentor: "",
    courseId: null,
    _id: null,
    courseName: "",
    courseType: "",
    skillLevel: "",
  }




  AllTopics = [];
  AllSubtopics = [];

  addCourseTopics = {
    mentor: "",
    courseId: null,
    courseName: "",
    topicName: "",
  }


  addCourseSubTopics = {
    mentor: "",
    courseId: null,
    topicId: null,
    topicName: "",
    subTopicName: ""
  }

  topicAlteadySelected = false;


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.AllTopics, event.previousIndex, event.currentIndex);
  }

  dropSubtopics(event: CdkDragDrop<string[]>, item) {
    moveItemInArray(item.SubTopicsData, event.previousIndex, event.currentIndex);
  }

  constructor(private _formBuilder: FormBuilder,
    private CommonService: CommonService,
    private router: Router,
    private route: ActivatedRoute,
    private EncrDecrService: EncrDecrService,
    private toastr: ToastrService, ) {

    this.userInfo = this.CommonService.getuserInfo();
    console.log("==", this.userInfo)
    this.Payload.mentor = this.userInfo.email;


    this.route.queryParams.subscribe(params => {
      console.log(params.Data)
      if (params.Data) {
        var DecriptedData = this.EncrDecrService.get(params.Data);
        this.UrlData = JSON.parse(DecriptedData);
        this.CourseDetails = {
          mentor: this.UrlData.mentor,
          _id: this.UrlData._id,
          courseId: this.UrlData.courseId,
          courseName: this.UrlData.courseName,
          courseType: this.UrlData.courseType,
          skillLevel: this.UrlData.skillLevel,
        };
        this.viewstep = '4';
        console.log("UrlData", this.UrlData);

        // this.GetCoursesOfMentor()
        this.GetTopicsList();
      }

    })
  }

  ngOnInit() {

  }

  setCoursetype() {
    this.Payload.courseType = this.SessionType;
    this.viewstep = '2';
  }

  aboutThisCourse() {
    console.log("this.Payload==>", this.Payload);

    var url = APIURL.ADD_COURSE;
    this.CommonService.postMethod(url, this.Payload)
      .subscribe((data: Data) => {
        console.log("Data===>", data);
        if (data.Success) {
          this.toastr.success("Course added successfully! \n Now we can add topics and subtopics of course.", "Success !");
          // this.viewstep = '4';
          var CourseData = {
            mentor: this.Payload.mentor,
            courseId: data.Data.courseId,
            courseName: this.Payload.courseName,
            courseType: this.Payload.courseType,
            skillLevel: this.Payload.skillLevel,
            _id: data.Data._id,
          }
          var StringifyedData = JSON.stringify(CourseData);
          var EncriptedData = this.EncrDecrService.set(StringifyedData);
          this.router.navigate(['/home/courseupload'], { queryParams: { Data: EncriptedData } });
        }
        else {
          this.toastr.warning(data.msg, "Error !");
        }
      })


  }



  coursebackfromLast() {
    this.router.navigate(['/home/courseupload'], { queryParams: {} });
    this.viewstep = '3';
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

          this.AllTopics.forEach(topic => {
            topic.SubTopicsData = [];
          })
          this.GetSubTopicsList();
        }

      })
  }

  GetSubTopicsList() {
    var obj = {
      mentor: this.CourseDetails.mentor,
      courseId: this.CourseDetails.courseId
    }
    var url = APIURL.GET_SUB_TOPICS_OF_COURSE;
    this.CommonService.postMethod(url, obj)
      .subscribe((data: Data) => {
        console.log("AllSubtopics===>", data);
        if (data.Success) {
          this.AllSubtopics = data.Data;

          this.AllTopics.forEach(topic => {
            topic.SubTopicsData = [];
            this.AllSubtopics.forEach(subtopic => {
              if (topic.topicId == subtopic.topicId) {
                topic.SubTopicsData.push(subtopic);
              }
            })
          })

          console.log(" this.AllTopics", this.AllTopics)



        }
      })
  }


  AddTopics() {
    this.addCourseTopics = {
      mentor: this.CourseDetails.mentor,
      courseId: this.CourseDetails.courseId,
      courseName: this.CourseDetails.courseName,
      topicName: this.addCourseTopics.topicName,
    }

    var url = APIURL.ADD_TOPICS_OF_COURSE;
    this.CommonService.postMethod(url, this.addCourseTopics)
      .subscribe((data: Data) => {
        console.log("addCoursetopic===>", data);
        if (data.Success) {
          this.addCourseTopics.topicName = "";
          this.toastr.success("Topic added successfully!", "Success !");
          this.GetTopicsList();
        }
      })

  }

  changeTopic() {
    this.AllTopics.forEach(topic => {
      if (topic.topicId == this.addCourseSubTopics.topicId) {
        this.addCourseSubTopics.topicName = topic.topicName;
      }
    })
  }

  openaddsubtopics() {
    this.topicAlteadySelected = false;
  }

  SelectTopicForSubtopics(item) {
    this.addCourseSubTopics.topicId = item.topicId;
    this.addCourseSubTopics.topicName = item.topicName;
    this.topicAlteadySelected = true;
  }


  AddSubTopics() {
    this.addCourseSubTopics.mentor = this.CourseDetails.mentor;
    this.addCourseSubTopics.courseId = this.CourseDetails.courseId;

    var url = APIURL.ADD_SUB_TOPICS_OF_COURSE;
    this.CommonService.postMethod(url, this.addCourseSubTopics)
      .subscribe((data: Data) => {
        console.log("addsubtopiccourse===>", data);
        if (data.Success) {
          this.addCourseSubTopics.subTopicName = "";
          this.toastr.success("SubTopic added successfully!", "Success !");
          this.GetSubTopicsList();
        }
      })
  }




  SubmitCourse() {

  }







}
