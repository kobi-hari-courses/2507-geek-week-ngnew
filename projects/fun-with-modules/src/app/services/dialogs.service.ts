import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../components/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogsService {

  constructor(private matDialog: MatDialog) { }

  openDialog() {
    this.matDialog.open(DialogComponent);
  }
}
