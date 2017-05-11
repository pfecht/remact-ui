import { RestService } from './../../shared/rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  minOutletDelay= 0;
  maxOutletDelay= 320;

  settingKeys = [
    "OutletDelay",
    "TimeBoundary"
  ];

  userInput:any = {};
  systemInput:any = {}

  currentDelay = 0;
  constructor(private restService:RestService) { }

  ngOnInit() {  
    this.settingKeys.forEach(key => {
      this.restService
        .getItemState(key)
        .subscribe(state => {
          this.systemInput[key] = state;
          this.userInput[key] = state;
        });
    });
  }

  saveSettings() {
    this.settingKeys.forEach(key => {
      if(this.valueDiffers(key)) {
        this.restService
          .postCommandToItem(key, this.userInput[key])
          .subscribe(data => console.log(data));
        this.systemInput[key] = this.userInput[key];
      } 
    });
  }

  private valueDiffers(key:string) {
    return this.systemInput[key] !== this.userInput[key];
  }

  private saveValue(key:string, value:any) {
    this.restService.postCommandToItem(key, value).subscribe(data => console.log(data)); 
  }

} 
