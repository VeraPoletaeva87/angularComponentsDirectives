import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, NonNullableFormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { passwordStrengthValidator } from '../../services/validators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  constructor(
    private loginService: LoginService, 
    private router: Router,
    private formBuilder: NonNullableFormBuilder
  ) {}

  loginForm = this.formBuilder.group({
    login: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), passwordStrengthValidator()])
  });

  get login(): AbstractControl<string | null> | null { return this.loginForm.get('login'); }
  get password(): AbstractControl<string | null> | null { return this.loginForm.get('password'); }

  loginHandler() {
    if (!this.loginForm.invalid) {
      this.loginService.saveUser(this.loginForm.controls.login.value || '', this.loginForm.controls.password.value || '');
      this.router.navigate(['/main']);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
