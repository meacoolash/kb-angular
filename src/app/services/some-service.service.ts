import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SomeServiceService {

  protected myData: string = "data from service";

  constructor() {
    console.log('SomeServiceService');
  }

  public getMyData(): string {
    return this.myData;
  }

}
