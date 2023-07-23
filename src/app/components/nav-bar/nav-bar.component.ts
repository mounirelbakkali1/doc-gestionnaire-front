import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from 'src/app/services/auth-guard/auth-guard.service';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';
import { RoleGuardService } from 'src/app/services/role-gard/role-guard.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  loggedIn: boolean = true;
  isAdmin: boolean = false;

  constructor(
    private auth: AuthServiceService,
    private guard: RoleGuardService
  ) {}
  ngOnInit(): void {
    this.loggedIn = this.auth.isAuthenticated();
    this.isAdmin = this.guard.validateRole('ROLE_ADMIN');
  }
}
