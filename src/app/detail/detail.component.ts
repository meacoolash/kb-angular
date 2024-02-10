import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  myId: string | null = null;

  constructor () {
     this.myId = this.route.snapshot.params['id'];
  }

}
