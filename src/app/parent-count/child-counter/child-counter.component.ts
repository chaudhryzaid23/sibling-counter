import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-counter',
  standalone: true,
  imports: [],
  templateUrl: './child-counter.component.html',
  styleUrl: './child-counter.component.scss',
})
export class ChildCounterComponent {
  @Output() onClickEmitter: EventEmitter<number> = new EventEmitter<number>();

  count: number = 0;

  onClick() {
    this.count++;
    console.log(this.count);
  }
}
