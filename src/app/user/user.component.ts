import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isSideNavOpen: boolean = true;

  toggleSidenav() {
    this.sidenav.toggle();
    this.isSideNavOpen = !this.isSideNavOpen;
  }
}