import { TestBed} from '@angular/core/testing';
import { LoginService } from './login.service';
import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';


describe('LoginService', () => {
    let loginService: LoginService;
    const testLogin = 'user@mail.com';
    const testPassword = '12&dDssss';
    let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
            RouterTestingModule.withRoutes([
              { path: "login", component: LoginPageComponent }
          ])]
    });
    loginService = TestBed.inject(LoginService);
    router = TestBed.inject(Router);
  });


  it('should save user in a local storage on login button click', async () => { 
    loginService.saveUser(testLogin, testPassword);
    const login = localStorage.getItem('login');
    expect(login).toMatch(testLogin);
    const password = localStorage.getItem('password');
    expect(password).toMatch(testPassword);
  });


  it('should clear local storage and redirect to login page on logout button click', async () => { 
    const spy = jest.spyOn(router, 'navigate');
   
    loginService.saveUser(testLogin, testPassword);

    loginService.logOut();

    const login = localStorage.getItem('login');
    expect(login).toBeFalsy();
    const password = localStorage.getItem('password');
    expect(password).toBeFalsy();
    expect(spy).toHaveBeenCalledWith(['/login']);
  });
});
