import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cup',
  standalone: true,
  imports: [],
  templateUrl: './cup.component.html',
  styleUrl: './cup.component.scss'
})
export class CupComponent {

  @Input() type: string | null = null;
  isEmpty = false;

  constructor() {
    console.log('CupComponent constructor');
  }

  public drink() {
    this.isEmpty = true;
  }
  
}
