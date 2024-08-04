import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { UsersListService } from '../common/services/users-list.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  constructor(private router: Router,
    private usersListService: UsersListService
  ) {

  }

  @ViewChild('sidenav') sidenav!: MatSidenav;
  isSideNavOpen: boolean = false;

  toggleSidenav() {
    this.sidenav.toggle();
    this.isSideNavOpen = !this.isSideNavOpen;
  }

  logout() {
    this.usersListService.logout();
    this.router.navigate(['']);
  }
}