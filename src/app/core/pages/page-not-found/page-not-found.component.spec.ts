import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PageNotFoundComponent } from './page-not-found.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HeaderComponent } from '../../components/header/header.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;
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
      declarations: [PageNotFoundComponent],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render error message', async () => { 
    const element = fixture.debugElement;
    const errorSpan = element.query(By.css('.grey')).nativeElement;
    expect(errorSpan.textContent).toContain('Sorry, smth went wrong');
  });


  it('should go to main page on the back button click', async () => { 
    const spy = jest.spyOn(router, 'navigate');
    component.backClickHandler();
    
    expect(spy).toHaveBeenCalledWith(['/main']);

    spy.mockReset();
    spy.mockRestore();
  });
});

