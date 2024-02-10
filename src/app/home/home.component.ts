import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomeServiceService } from '../services/some-service.service';
import { FormComponent } from "../form/form.component";
import { Item } from '../interfaces/item';

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

  items: string[] = ["asdf"]; 
  filteredItems: string[] = ["qwer"];
  
  constructor() {
    this.someServiceService.getAllousingLocations().then((data: Item[]) => {
      this.items = data.map((item: Item) => item.fruit);
      this.filteredItems = this.items;
    });
    
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
