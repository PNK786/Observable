import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SampleOneComponent } from "./sample-one/sample-one.component";
import { SampleTwoComponent } from "./sample-two/sample-two.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, SampleOneComponent, SampleTwoComponent]
})
export class AppComponent {
  title = 'Observable';
}
