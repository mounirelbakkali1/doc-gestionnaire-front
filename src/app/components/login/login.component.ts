import { UserInfo } from 'src/app/interfaces/UserInfo';
import { AuthServiceService } from './../../services/auth/auth-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private authService: AuthServiceService) {}

  onLogin() {
    const user = {
      username: this.username,
      password: this.password,
    } as UserInfo;
    this.authService.login(user).subscribe(
      (loggedIn: boolean) => {
        if (loggedIn) {
          window.location.href = '';
        } else {
          this.loginError = true;
        }
      },
      (error) => {
        this.loginError = true;
      }
    );
  }
}
