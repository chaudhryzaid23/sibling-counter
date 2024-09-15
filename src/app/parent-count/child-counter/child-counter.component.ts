import {
  Component,
  EventEmitter,
  Input,
  numberAttribute,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-child-counter',
  standalone: true,
  imports: [],
  templateUrl: './child-counter.component.html',
  styleUrl: './child-counter.component.scss',
})
export class ChildCounterComponent {
  @Input() displayNum!: number;
  @Output() onClickEmitter: EventEmitter<number> = new EventEmitter<number>();

  @Input() incCount!: number;

  onClick() {
    this.incCount = this.incCount + 1;
    this.onClickEmitter.emit(this.incCount);
  }
}
