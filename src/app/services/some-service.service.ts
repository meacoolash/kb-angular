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

  public submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Data received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }

}
