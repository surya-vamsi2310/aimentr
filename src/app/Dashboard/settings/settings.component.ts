import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
items:any;
rangeValue = null;
  constructor() {
   this.items = Array.from({length: 100000});
   
 
  }
  onRangeValueChange(event: any) {
    this.rangeValue = event.value;

   }
   formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + '$';
    }

    return value;
  }

  ngOnInit(): void {
  }

}
