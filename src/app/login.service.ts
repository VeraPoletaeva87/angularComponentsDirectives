import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class LoginService {

    saveUser(login: string, password: string) {
        localStorage.setItem(login, login);
        localStorage.setItem(password, password);
    }

    logOut() {
        localStorage.clear();
    }

}