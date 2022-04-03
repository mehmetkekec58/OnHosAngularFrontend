import { LocalStorageService } from './../../services/local-storage.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-drawer-menu-list',
  templateUrl: './drawer-menu-list.component.html',
  styleUrls: ['./drawer-menu-list.component.css']
})
export class DrawerMenuListComponent implements OnInit {

  @Output() outputFromChild : EventEmitter<string> = new EventEmitter();

  constructor(private localStorageService:LocalStorageService) { }

  ngOnInit(): void {
  }
  cikisYap(){
    this.localStorageService.deleteLocalStorageToken();
    this.outputFromChild.emit("false");
  }
}
