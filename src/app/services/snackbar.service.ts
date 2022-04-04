import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar:MatSnackBar) { }

  openSnackBar(metin: string,buton:string) {
    this.snackBar.open(metin, buton, {
      duration: 5 * 1000,
    });
  }
}
