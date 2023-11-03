import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  constructor(private loginService: LoginService, private router: Router) {}

  login: string = '';
  password: string = '';

  loginHandler() {
    this.loginService.saveUser(this.login, this.password);
    this.router.navigate(['/main']);
  }

  loginChangeHandler(e: Event) {
    this.login = (e.target as HTMLInputElement).value;
  }

  passwordChangeHandler(e: Event) {
    this.password = (e.target as HTMLInputElement).value;
  }
}
