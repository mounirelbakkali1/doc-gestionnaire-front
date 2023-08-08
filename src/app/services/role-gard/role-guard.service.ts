import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import decode from 'jwt-decode';
import { AuthServiceService } from '../auth/auth-service.service';
import { Payload } from 'src/app/interfaces/Payload';

@Injectable({
  providedIn: 'root',
})
export class RoleGuardService {
  constructor(public auth: AuthServiceService, public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const data: any = route.data;
    let expectedRole: any = data.expectedRole;
    console.log(expectedRole);

    return this.validateRole(expectedRole);
  }

  public validateRole(expectedRole: string) {
    const token: any = localStorage.getItem('access_token');
    const tokenPayload: Payload = decode(token);
    if (
      !this.auth.isAuthenticated() ||
      !tokenPayload.roles.some((role) => role.name === expectedRole)
    ) {
      //this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
