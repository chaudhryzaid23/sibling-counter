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
  countFirst: number = 5;
  countSecond: number = 3;

  clickResponseFirst(count: number) {
    this.countSecond = count;
  }

  clickResponseSecond(count: number) {
    this.countFirst = count;
  }
}
