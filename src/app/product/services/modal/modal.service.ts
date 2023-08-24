import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private dialog: MatDialog) {}

  openModal(component: any, data: any, width: string) {
    this.dialog.open(component, {
      width: width,
      data: data,
    });
  }
}
