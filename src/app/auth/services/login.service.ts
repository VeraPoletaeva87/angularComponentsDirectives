import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class LoginService {

    constructor(private router: Router) {}

    //loggedIn = false - user is not logged in
    loggedIn: boolean = false;
    public valueObs: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    setValue(value: boolean): void {
        this.valueObs.next(value);
      }
      
      getValue(): Observable<boolean> {
        return this.valueObs.asObservable();
      }

    saveUser(login: string, password: string) {
        localStorage.setItem('login', login);
        localStorage.setItem('password', password);
        this.setValue(true);
    }

    logOut() {
        this.setValue(false);
        localStorage.clear();
        this.router.navigate(['/login']);
    }

    isLoggedIn() {
        return !!localStorage.getItem('login');
    } 

    updateLogged() {
        this.setValue(!!localStorage.getItem('login'));
    }

}