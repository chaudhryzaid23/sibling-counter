import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-counter',
  standalone: true,
  imports: [],
  templateUrl: './child-counter.component.html',
  styleUrl: './child-counter.component.scss',
})
export class ChildCounterComponent {
  @Input() count!: number;
  @Output() onClickEmitter: EventEmitter<number> = new EventEmitter<number>();

  onClick() {
    this.count++;
    console.log(this.count);
    this.onClickEmitter.emit(this.count);
  }
}
