import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  constructor(private loginService: LoginService, private router: Router) {}

  loginForm = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  loginHandler() {
   // this.loginService.saveUser(this.login, this.password);
    this.router.navigate(['/main']);
  }

  updateLogin(e: Event) {
    this.loginForm.patchValue({login: (e.target as HTMLInputElement).value});
  }

  updatePassword(e: Event) {
    this.loginForm.patchValue({password: (e.target as HTMLInputElement).value});
  }
}
