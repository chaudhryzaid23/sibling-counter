import { Component } from '@angular/core';
import { ChildCounterComponent } from './child-counter/child-counter.component';

@Component({
  selector: 'app-parent-count',
  standalone: true,
  imports: [ChildCounterComponent],
  templateUrl: './parent-count.component.html',
  styleUrl: './parent-count.component.scss',
})
export class ParentCountComponent {
  displayNum!: number;
  countStart: number = 5;

  clickResponse(count: number) {
    this.displayNum = count;
  }
}
