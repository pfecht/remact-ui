import { RestService } from '../../shared/rest.service';
import { Component, OnInit } from '@angular/core';

const OUTLET_BORDER = 20;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userInput = {
    isOutletOn: false
  };
  systemInput = {
    isOutletOn: false
  }

  constructor(private restService: RestService) {}

  ngOnInit() {
   this.queryOutletState();
   window.setInterval(() => {
      this.queryOutletState();
    }, 2000);
  }

  private queryOutletState() {
    return this.restService
      .getItemState('Power')
      .subscribe((state: any) => {
        this.systemInput.isOutletOn = state > OUTLET_BORDER;
        this.syncOutletStates();
      });
  }

  public toggleOutlet() {
    const command = this.userInput.isOutletOn ? 'ON' : 'OFF';
    this.restService.postCommandToItem('EdiSwitch', command).subscribe(data => console.log(data));
    this.syncOutletStates();
  }

  private syncOutletStates() {
    this.userInput.isOutletOn =  this.userInput.isOutletOn || this.systemInput.isOutletOn;
  }
}