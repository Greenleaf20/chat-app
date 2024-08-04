import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../../common/models/user-details.model';
import { UserDetailsService } from '../../common/services/user-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  userDetails!: UserDetails;

  constructor(private userDetailsService: UserDetailsService,
    private router: Router
  ) {

  }

  ngOnInit() {
    let user = this.userDetailsService.getUserDetails() as UserDetails;
    if (user===null) {
      this.router.navigate(['']);
    }

    this.userDetails = user;
  }
}
