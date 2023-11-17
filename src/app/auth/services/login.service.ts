import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })

export class LoginService {

    constructor(private router: Router) {}

    saveUser(login: string, password: string) {
        localStorage.setItem('login', login);
        localStorage.setItem('password', password);
    }

    logOut() {
        localStorage.clear();
        this.router.navigate(['/login']);
    }

    isLoggedIn() {
        return !!localStorage.getItem('login');
    }

}