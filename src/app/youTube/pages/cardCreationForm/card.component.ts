import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { dateValidator } from '../../services/validators';

@Component({
  selector: 'create-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CreateCardComponent {
  constructor(private router: Router, private formBuilder: FormBuilder) {}

  cardForm = this.formBuilder.group({
    title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    description: ['', [Validators.required, Validators.maxLength(255)]],
    image: ['', [Validators.required]],
    video: ['', [Validators.required]],
    date: ['', [Validators.required, dateValidator()]],
    tags: this.formBuilder.array([['', [Validators.required]]])
});

  get title(): AbstractControl<string | null, string | null> | null { return this.cardForm.get('title'); }
  get description(): AbstractControl<string | null, string | null> | null { return this.cardForm.get('description'); }
  get image(): AbstractControl<string | null, string | null> | null { return this.cardForm.get('image'); }
  get video(): AbstractControl<string | null, string | null> | null { return this.cardForm.get('video'); }
  get date(): AbstractControl<string | null, string | null> | null { return this.cardForm.get('date'); }

  cardSaveHandler() {
    if (!this.cardForm.invalid) {
      this.router.navigate(['/main']);
    }else {
      this.cardForm.markAllAsTouched();
    } 
   } 

  resetHandler() {
    this.cardForm.reset();
  }

  addTagHandler() {
    const tags = this.cardForm.controls.tags;
    if (tags.length < 5) {
      this.cardForm.controls.tags.push(new FormControl('', [Validators.required]));
    }
   }

  updateTitle(e: Event) {
    this.cardForm.patchValue({title: (e.target as HTMLInputElement).value});
  }

  updateDescription(e: Event) {
    this.cardForm.patchValue({description: (e.target as HTMLInputElement).value});
  }

  updateImage(e: Event) {
    this.cardForm.patchValue({image: (e.target as HTMLInputElement).value});
  }

  updateVideo(e: Event) {
    this.cardForm.patchValue({video: (e.target as HTMLInputElement).value});
  }

}