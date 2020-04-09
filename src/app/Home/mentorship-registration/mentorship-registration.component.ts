import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { CommonService } from '../../Services/common.service';
import { Router, NavigationExtras, ActivatedRoute, Data } from '@angular/router';
import { EncrDecrService } from '../../Services/encr-decr.service'
import { APIURL } from '../../url'
enum roles {
  admin = 1,
  student = 2,
  mentor = 3
}
@Component({
  selector: 'app-mentorship-registration',
  templateUrl: './mentorship-registration.component.html',
  styleUrls: ['./mentorship-registration.component.scss']
})
export class MentorshipRegistrationComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;


  Payload = {
    email: "",
    username: "",
    firstname: "",
    lastname: "",
    password: "",
    role: "",
    signInMethod: "",
    profileUpdated: false,
    isActive: false,
    verified: true,

    personal: {
      gender: "",
      mobile: null,
      about: "",
      dob: { year: null, month: null, day: null },
      location: "",
      mail: "",
      name: ""
    },

    education: {
      college: "",
      degree: "",
      graduationYear: null,
      skills: []
    },
    work: {
      experienceLevel: "",
      experiences: [
        {
          company: "",
          duration: { start: { year: null, month: null, day: null }, end: { year: null, month: null, day: null }, current: false },
          role: "",
          description: ""
        }
      ]
    },
    analysis: {},
    training: {},
    mentor: {
      timings: [],  // {Start: '', end: ''}
      languagesTeach: [],
      context: [],
      classification: [],
      jobType: "",
      avgCost: "",
      reputation: ""
    },
    learningAssets: {
      interestedAreas: [],
      financialAid: false,
      isOpportunities: false,
      opportunityType: []
    }
  }


  UrlData;
  ExtractedData = {
    username:"",
    Email: "",
    MobileNumber: null,
    Context: null,
    Company: null,
    Experience: [],
    role: null
  }


  constructor(private _formBuilder: FormBuilder,
    private CommonService: CommonService,
    private router: Router,
    private route: ActivatedRoute,
    private EncrDecrService: EncrDecrService) {
    this.route.queryParams.subscribe(params => {
      console.log(params.Data)
      var DecriptedData = this.EncrDecrService.get(params.Data);
      this.UrlData = JSON.parse(DecriptedData);
      this.ExtractedData = {
        username:this.UrlData.username,
        Email: this.UrlData.Email,
        MobileNumber: this.UrlData.MobileNumber,
        Context: this.UrlData.Context,
        Company: this.UrlData.Company,
        Experience: this.UrlData.Experience,
        role: this.UrlData.role
      };
      console.log("UrlData", this.UrlData);
      
      this.urlDataAssignedToPayload()

    })
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  urlDataAssignedToPayload(){
    this.Payload.email =  this.ExtractedData.Email;
    this.Payload.username =  this.ExtractedData.username;
    this.Payload.role =  this.ExtractedData.role;
    this.Payload.personal.mail =  this.ExtractedData.Email;
    this.Payload.personal.mobile =  this.ExtractedData.MobileNumber;


    // this.Payload.work.experiences

    this.Payload.mentor.context = this.ExtractedData.Context;

  }



  personalToWork(){
    console.log(this.Payload);
  }



}
