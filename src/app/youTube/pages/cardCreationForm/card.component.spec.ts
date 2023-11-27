import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateCardComponent } from './card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { FormControl, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../core/components/button/button.component';


describe('CreateCardComponent', () => {
let component: CreateCardComponent;
let fixture: ComponentFixture<CreateCardComponent>;

beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCardComponent, ButtonComponent],
      imports: [
        StoreModule.forRoot({}, {}),
        RouterTestingModule
      ]
    });
    fixture = TestBed.createComponent(CreateCardComponent);
    component = fixture.componentInstance;
  });
  it('reset click should clear the title', () => {
    component.cardForm.controls.title.setValue('test title');
    component.resetHandler();
    expect(component.cardForm.controls.title.value).toMatch('');
  });

  it('reset click should delete all tag fields except one', () => {
    component.cardForm.controls.tags.push(
        new FormControl('', {nonNullable: true, validators: [Validators.required]})
    );
    component.resetHandler();
    expect(component.cardForm.controls.tags.length).toEqual(1);
  });

  it('add tag click should add a tag field', () => {
    component.cardForm.controls.tags.push(
        new FormControl('', {nonNullable: true, validators: [Validators.required]})
    );
    expect(component.cardForm.controls.tags.length).toEqual(2);
  });
});
