import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import { StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { CreateCardComponent } from '../../../youTube/pages/cardCreationForm/card.component';

describe('HeaderComponent', () => {
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
          { path: 'create-card', component: CreateCardComponent },
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

  it('should create header', () => {
    expect(component).toBeTruthy();
  });

  it('should go to card creation page on clicking create button', fakeAsync(() => { 
  const spy = jest.spyOn(router, 'navigate');
  component.cardCreateHandler();
  expect(spy).toHaveBeenCalledWith(['/create-card']);

  spy.mockReset();
  spy.mockRestore();
  }));
});


