import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit {

  viewstep = "1";
  SessionType="";
  topicsData = [
    { topicname:"Topic Name 1"},
    { topicname:"Topic Name 2"},
    { topicname:"Topic Name 3"},
    { topicname:"Topic Name 4"},
    { topicname:"Topic Name 5"}
  ];
  SubTopicsData =  [
    { subtopicname:"sub topic name 1"},
    { subtopicname:"sub topic name 2"},
    { subtopicname:"sub topic name 3"},
  ];
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.topicsData, event.previousIndex, event.currentIndex);
  }
  dropSubtopics(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.SubTopicsData, event.previousIndex, event.currentIndex);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
