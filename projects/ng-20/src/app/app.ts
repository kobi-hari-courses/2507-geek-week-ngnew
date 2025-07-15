import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ConverterPage } from "./pages/converter-page/converter-page";
import { MyLink } from './directives/my-link';

@Component({
  selector: 'app-root',
  imports: [RouterModule, MyLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ng-20');
}
