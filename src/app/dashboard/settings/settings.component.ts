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
  currentDelay = 0;
  constructor(private restService:RestService) { }

  ngOnInit() {  
    this.restService
      .getItemState("OutletDelay")
      .subscribe(state => {
        this.currentDelay = state;
      });
  }

  delayChange() {
    console.log(this.currentDelay);
    this.restService.postCommandToItem("OutletDelay", this.currentDelay).subscribe(data => console.log(data));
  }

}
