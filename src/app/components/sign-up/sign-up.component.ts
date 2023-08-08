import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  name: string = '';
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  signupError: boolean = false;
  signupErrorMessage: string = '';

  constructor(private authService: AuthServiceService) {}

  onSubmit() {
    if (this.password !== this.confirmPassword) {
      this.signupError = true;
      this.signupErrorMessage = 'Passwords do not match';
      return;
    }
    const user = {
      name: this.name,
      username: this.username,
      password: this.password,
      confirmPassword: this.confirmPassword,
    };
    this.authService.signup(user).subscribe(
      (signupSuccess: boolean | string) => {
        if (signupSuccess === true) {
          window.location.href = '/login';
        } else {
          this.signupError = true;
          this.signupErrorMessage = signupSuccess as string;
        }
      },
      (error) => {
        this.signupError = true;
        this.signupErrorMessage = 'An error occured. Please try again later';
      }
    );
  }
}
