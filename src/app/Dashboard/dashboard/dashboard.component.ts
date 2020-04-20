import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../Services/common.service';
import { Router, NavigationExtras, ActivatedRoute, Data } from '@angular/router';
import { APIURL } from '../../url';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userInfo;
  constructor(  private CommonService: CommonService,
    private router: Router,
    private route: ActivatedRoute,) {
    this.userInfo = this.CommonService.getuserInfo();
   }

  ngOnInit(): void {
  }


  logoutnow(){
    this.CommonService.logout();
  }


}
