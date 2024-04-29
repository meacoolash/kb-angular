import { Component } from '@angular/core';
import { CupComponent } from './cup/cup.component';

@Component({
  selector: 'app-cafe',
  standalone: true,
  imports: [CupComponent],
  template: `
    <h1>Cafe</h1>
    @for(cafe of cafes; track cafe) {
      <app-cup type={{cafe}}></app-cup>
    }
  `,
  styleUrl: './cafe.component.scss'
})
export class CafeComponent {

  public cafes = ['Starbucks', 'Costa', 'Nero'];

}
