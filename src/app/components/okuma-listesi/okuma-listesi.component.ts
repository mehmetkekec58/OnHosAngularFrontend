import { CategoryComponent } from './../category/category.component';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface User {
  name: string;
}

@Component({
  selector: 'app-okuma-listesi',
  templateUrl: './okuma-listesi.component.html',
  styleUrls: ['./okuma-listesi.component.css']
})
export class OkumaListesiComponent implements OnInit {
durationInSeconds:number=2;


  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit() {

  }

  openSnackBar(veri:string) {
    this._snackBar.open(`${veri} Okuma Listesinden kaldırıldı`,"Tamam", {
      duration: this.durationInSeconds * 1000,
    });
  }



}

