import { Component, Input } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-page-b',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './page-b.component.html',
  styleUrl: './page-b.component.scss'
})
export default class PageBComponent {
  @Input({required: true}) 
  id!: string;

}
