import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { passwordStrengthValidator } from '../../services/validators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  constructor(private loginService: LoginService, private router: Router) {}

  loginForm = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), passwordStrengthValidator()])
  });

  loginHandler() {
    if (!this.loginForm.invalid) {
      this.loginService.saveUser(this.loginForm.controls.login.value || '', this.loginForm.controls.password.value || '');
      this.router.navigate(['/main']);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  updateLogin(e: Event) {
    this.loginForm.patchValue({login: (e.target as HTMLInputElement).value});
  }

  updatePassword(e: Event) {
    this.loginForm.patchValue({password: (e.target as HTMLInputElement).value});
  }
}
