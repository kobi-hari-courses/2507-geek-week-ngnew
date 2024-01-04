import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CModule } from './c/c.module';
import { MatButtonModule } from '@angular/material/button';
import { DialogsService } from './services/dialogs.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, CModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fun-with-modules';
  http = inject(HttpClient);
  dialogs = inject(DialogsService);

  constructor() {
    console.log(this.http);
  }

  onClick() {
    this.dialogs.openDialog();
  }
}
