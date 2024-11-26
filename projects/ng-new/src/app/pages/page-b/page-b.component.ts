import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-b',
  imports: [],
  templateUrl: './page-b.component.html',
  styleUrl: './page-b.component.scss'
})
export default class PageBComponent {
  @Input({required: true})
  num!: number;

}
