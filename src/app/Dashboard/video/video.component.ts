import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.scroll("panel-1");
  }
  
  scroll(id) {
    console.log(`scrolling to ${id}`);
    let el = document.getElementById(id);
    el.scrollIntoView();
  }

}
