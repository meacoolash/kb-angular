import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item';

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

  
  async getAllousingLocations(): Promise<Item[]> {
    return fetch('http://localhost:3000/items')
    .then((response) => response.json())
    .then((response) => response[0])
  }

}
