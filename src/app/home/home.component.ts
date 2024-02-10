import { Component, Input, OnInit, inject } from '@angular/core';
import { Temp } from '../interfaces/temp';
import { CommonModule } from '@angular/common';
import { SomeServiceService } from '../services/some-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit { 

  @Input() myInput: string | null = null;

  someServiceService: SomeServiceService = inject(SomeServiceService);

  readonly myTemp = "asdf";

  title: Temp = {
    id: this.myTemp,
  } 

  items = ['item1', 'item2', 'item3'];

  constructor() {
    // this.someServiceService = new SomeServiceService();
  }

  ngOnInit(): void {
    console.log(this.myInput);
    console.log(this.someServiceService.getMyData())
  }

}
