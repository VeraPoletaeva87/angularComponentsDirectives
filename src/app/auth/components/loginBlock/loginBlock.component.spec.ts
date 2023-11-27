import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginBlockComponent } from './loginBlock.component';
import SharedModule from '../../../shared/modules/shared.module';

describe('AuthenticationComponent', () => {
  let component: LoginBlockComponent;
  let fixture: ComponentFixture<LoginBlockComponent>;



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginBlockComponent, SharedModule]
    }).compileComponents(); 
    fixture = TestBed.createComponent(LoginBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create standalone component', () => {
    expect(component).toBeTruthy();
  });
});
