import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestService {

  constructor(private http:HttpModule) {
    
  }

}
