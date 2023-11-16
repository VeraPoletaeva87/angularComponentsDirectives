import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  NonNullableFormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { dateValidator } from '../../services/validators';

@Component({
  selector: 'create-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CreateCardComponent {
  constructor(
    private router: Router,
    private formBuilder: NonNullableFormBuilder
  ) {}

  cardForm = this.formBuilder.group({
    title: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(20)],
    ],
    description: ['', [Validators.required, Validators.maxLength(255)]],
    image: ['', [Validators.required]],
    video: ['', [Validators.required]],
    date: ['', [Validators.required, dateValidator()]],
    tags: this.formBuilder.array([['', [Validators.required]]]),
  });

  get title(): AbstractControl<string> | null {
    return this.cardForm.get('title');
  }
  get description(): AbstractControl<string> | null {
    return this.cardForm.get('description');
  }
  get image(): AbstractControl<string> | null {
    return this.cardForm.get('image');
  }
  get video(): AbstractControl<string> | null {
    return this.cardForm.get('video');
  }
  get date(): AbstractControl<string> | null {
    return this.cardForm.get('date');
  }

  cardSaveHandler() {
    if (!this.cardForm.invalid) {
      this.router.navigate(['/main']);
    } else {
      this.cardForm.markAllAsTouched();
    }
  }

  resetHandler() {
    this.cardForm.reset();
    while (this.cardForm.controls.tags.length !== 1) {
      this.cardForm.controls.tags.removeAt(0);
    }
  }

  addTagHandler() {
    const tags = this.cardForm.controls.tags;
    if (tags.length < 5) {
      this.cardForm.controls.tags.push(
        new FormControl('', {nonNullable: true, validators: [Validators.required]})
      );
    }
  }
}
