import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PageNotFoundComponent } from './page-not-found.component';
import  AppComponent  from '../../../app.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HeaderComponent } from '../../components/header/header.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
describe('PageNotFoundComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;


  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({}, {}),
        RouterTestingModule.withRoutes([
          { path: "", component: HeaderComponent },
          { path: 'non-existing-route', component: PageNotFoundComponent },
        ]),
      ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [HeaderComponent],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should show page not fount component on invalid route', fakeAsync(() => { 
    const spy = jest.spyOn(router, 'navigate');
    router.navigate(['/non-existing-route']);
    const cardComponent = fixture.nativeElement.querySelector('span');
    expect(cardComponent).toContain('Sorry, smth went wrong');
  
    spy.mockReset();
    spy.mockRestore();
  }));
});

