import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class RestService {
  constructor(private http:Http) {}


  public getItem(itemName:string) {
    return this.http
      .get(environment.restBaseUrl + "/items/" + itemName)
      .map((res:Response) => res.json());
  }
  public getItemState(itemName:string) {
    return this.http
      .get(environment.restBaseUrl + "/items/" + itemName)
      .map((res:Response) => res.json().state);
  }

  public postCommandToItem(itemName: string, command:any) {
    return this.http
      .post(environment.restBaseUrl + "/items/" + itemName, command)
  }
}
