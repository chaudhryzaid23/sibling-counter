import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentCountComponent } from "./parent-count/parent-count.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParentCountComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'sibling-counters';
}
