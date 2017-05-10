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

  userInput = {
    outletDelay: 0,
    timeBoundary : "20:00" // TODO auf "" setzen
  };

  systemInput = {
    outletDelay: 0,
    timeBoundary : "20:00" //TODO auf "" setzen
  }

  currentDelay = 0;
  constructor(private restService:RestService) { }

  ngOnInit() {  
    this.restService
      .getItemState("OutletDelay")
      .subscribe(state => {
        this.systemInput.outletDelay = state;
        this.userInput.outletDelay = state;
      });
    
    this.restService
      .getItemState("TimeBoundary")
      .subscribe(state => {
        this.systemInput.outletDelay = state;
        this.userInput.outletDelay = state;
      })
  }

  saveSettings() {
    this.restService.postCommandToItem("OutletDelay", this.userInput.outletDelay).subscribe(data => console.log(data));
    this.restService.postCommandToItem("TimeBoundary", this.userInput.timeBoundary).subscribe(data => console.log(data));
  }

}
