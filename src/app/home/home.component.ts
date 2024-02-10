import { Component, Input, OnInit, inject } from '@angular/core';
import { Temp } from '../interfaces/temp';
import { CommonModule } from '@angular/common';
import { SomeServiceService } from '../services/some-service.service';
import { FormComponent } from "../form/form.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [CommonModule, FormComponent]
})
export class HomeComponent implements OnInit { 

  @Input() myInput: string | null = null;

  someServiceService: SomeServiceService = inject(SomeServiceService);

  readonly myTemp = "asdf";

  title: Temp = {
    id: this.myTemp,
  } 

  items = ['apple', 'pear', 'banana', 'orange'];
  filteredItems = this.items;

  constructor() {
    
  }

  filterItems(searchTerm: string) {
      this.filteredItems = this.items.filter(item =>
        item?.toLowerCase().includes(searchTerm.toLowerCase()),
      );  
  }  

  ngOnInit(): void {
    console.log(this.myInput);
    console.log(this.someServiceService.getMyData())
  }

}
